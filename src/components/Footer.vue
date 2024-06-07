<template>
    <footer class="footer">
        <div class="footer-left">
            <Logo />

            <ul class="footer__icons">
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/facebook.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/twitter.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/gmail.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/instagram.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/vk.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer-center">
            <p class="footer__address">
                Visit Us <br />
                Petrovskaya 87, Moscow, 119021
                +7 (495) 123-45-678<br/>
                info@fitfusion.ru
            </p>
        </div>
        <form 
            @submit.prevent="sendMessage"
            class="footer-right"
        >
            <textarea 
                class="footer__textarea" 
                name="message" 
                rows="4" 
                cols="25"
                v-model="message"
                placeholder="Send us a message..."
            />   
            <div>
                <input 
                    type="email" 
                    class="footer__input" 
                    v-model="email"
                    placeholder="Your email" 
                    required
                />
                <button 
                    class="footer__button"
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    </footer>
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Component } from 'vue-property-decorator';
import Logo from './Logo.vue';

@Component({
    components: {
        Logo
    }
})
export default class Footer extends Vue {
    public name = 'Footer';   

    private email = '';
    private message = '';

    async sendMessage() {
        try {
            const newMessage = {
                sender_email: this.email,
                message: this.message,
                date: this.getCurrentFormattedDate()
            };

            await axios.post('http://localhost:5555/message', newMessage);
        } catch(error) {
            console.error('Error Posting Review:', error);
        }

        this.clearForm();
    }

    clearForm() {
        this.email = '';
        this.message = '';
    }

    getCurrentFormattedDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    height: 25vh;
    background: rgb(60, 65, 66);
   

    &__icons {
        display: flex;
        margin-top: 3rem;
    }

    &__icon {
        list-style-type: none;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .6rem; 
    }

    &__icon:hover {
        width: 1.8rem;
        height: 1.8rem;

        transition: all .2s ease-in
    }

    &__address {
        @include screen-bigger-than($tablet) {
            display: block;
            padding-top: 5rem;
            color: white;
            font-size: .8rem;
        }

        display: none;
    }

    &__input {
        height: 2rem;
    }

    &__button {
        background-color: $theme-color;
        padding: .3rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem; 
    }

    &__button:hover {
        background-color: $theme-color-hover;
        transition: all .2s ease-in
    }

    &__textarea {
        margin-bottom: .7rem;
        padding: .2rem;
    }
}

.footer-right {
    display: flex;
    flex-direction: column;
}

</style>