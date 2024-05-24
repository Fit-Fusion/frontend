<template>
    <section class="calorie-calculator-section">
        <h1 class="calorie-calculator-section__title">Calorie Calculator</h1>

        <div v-if="userIsLoggedIn">
            <p class="calorie-calculator-section__info">
                Since you are still logged in, Neccessary info has been taken from your profile 
            </p>
        </div>
        
        <form 
            @submit.prevent="calculateCalories"
            class="calorie-calculator__form"
        >
            <input 
                class="calorie-calculator__form-input"
                type="number"
                v-model="weight" 
                placeholder="Weight (kg)" 
                required
            />
            <input 
                class="calorie-calculator__form-input"
                type="number"
                v-model="height" 
                placeholder="Height (cm)" 
                required
            />
            <input 
                class="calorie-calculator__form-input"
                type="number"
                v-model="age" 
                placeholder="Age" 
                required
            />
            <select 
                class="calorie-calculator__form-input"
                v-model="gender" 
                required
            >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <select 
                class="calorie-calculator__form-input"
                v-model="activityLevel" 
                required
            >
                <option value="" disabled>Select Activity Level</option>
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Light (light exercise/sports 1-3 days/week)</option>
                <option value="moderate">Moderate (moderate exercise/sports 3-5 days/week)</option>
                <option value="active">Active (hard exercise/sports 6-7 days a week)</option>
                <option value="veryActive">Very Active (very hard exercise/sports & physical job)</option>
            </select>
            <button 
                type="submit" 
                class="calorie-calculator__form-button"
            >
                Calculate
            </button>
        </form>
        
        <div v-if="calories" class="calorie-calculator__result">
            <p>Your daily calorie needs are: {{ calories }} kcal</p>
        </div>
    </section> 
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { User } from '../abstracts/Interfaces';
import { Role } from '../abstracts/Enum';

@Component
export default class CalorieCalculator extends Vue {
    public name = 'Calorie Calculator';  

    private weight = 0;
    private height = 0;
    private age: number | null = null;
    private gender = '';
    private activityLevel = '';
    private calories: number | null = null;

    @Getter('isLoggedIn') isLoggedIn: boolean;
    @Getter('user') user: User;
    @Getter('userIsAdmin') userIsAdmin: boolean;

    userIsLoggedIn() {
        return this.isLoggedIn && !this.userIsAdmin;
    }

    fillUserData() {
        if (this.userIsLoggedIn()) {
            this.weight = this.user.weight;
            this.height = this.user.height;
            this.age = this.user.age;
            this.gender = this.user.gender;
        }
    }

    calculateAge(birthDate: Date): number {
        const todayDate = new Date();
        let age = todayDate.getFullYear() - birthDate.getFullYear();

        if (this.isPastBirthMonthDay(todayDate, birthDate)) {
            age--;
        }
        
        return age;
    }

    isPastBirthMonthDay(todayDate: Date, birthDate: Date) {
        const monthDifference = todayDate.getMonth() - birthDate.getMonth();
        
        return monthDifference < 0 || (monthDifference === 0 && todayDate.getDate() < birthDate.getDate());
    }

    calculateCalories() {
        if (!this.weight || !this.height || !this.age || !this.gender || !this.activityLevel) {
            return;
        }

        let bmr: number;
        if (this.gender === 'male') {
            bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age);
        } else {
            bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);
        }

        const activityMultiplier: { [key: string]: number } = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            veryActive: 1.9
        };

        this.calories = Math.round(bmr * activityMultiplier[this.activityLevel]);
    }

    created() {
        this.fillUserData();
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.calorie-calculator-section {
    background: $black;
    color: $white;
    padding: 2rem;
    text-align: center;

    &__title {
        font-size: 2rem;
        padding-bottom: 1rem;
    }

    &__info {
        padding-bottom: 1rem;
    }
}

.calorie-calculator {
    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: $black;
        border-radius: 1rem;
        border: .1rem solid $theme-color;
        width: 25rem;
        padding: 2rem;
        margin: 0 auto;

        &-input {
            margin-bottom: 1rem;
            border-radius: 0.4rem;
            padding: 0.4rem;
            outline: none;
            width: 100%;
        }

        &-input:focus {
            border: 0.2rem solid $theme-color;
        }

        &-button {
            background-color: $theme-color;
            font-weight: 600;
            width: 10rem;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            padding: 0.5rem 1rem;
            border: none;
            cursor: pointer;
            border-radius: 0.3rem;
        }

        &-button:hover {
            background-color: $theme-color-hover;
            transition: all 0.2s ease-in;
        }
    }

    &__result {
        margin-top: 1rem;
        font-size: 1.2rem;
    }
}
</style>
