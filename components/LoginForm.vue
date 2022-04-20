<template>
  <div class="login-container">
    <h3>ログイン</h3>
    <form v-on:submit.prevent="login">
      <div class="email-input-wrapper">
        <label class="inp">
          <input v-model="email" type="email" name="Email" placeholder=" " />
          <span class="label">Email</span>
          <span class="border"></span>
        </label>
        <p v-show="errors.email" class="error">*{{ errors.email }}</p>
      </div>
      <div class="password-input-wrapper">
        <label class="inp">
          <input
            v-model="password"
            v-bind:type="inputType"
            name="Password"
            placeholder=" "
          />
          <span class="label">Password</span>
          <span class="border"></span>
          <div class="eye">
            <img
              v-on:click="inputType = 'text'"
              v-show="inputType === 'password'"
              src="/img/eyeClose.png"
            />
            <img
              v-on:click="inputType = 'password'"
              v-show="inputType === 'text'"
              src="/img/eye.png"
            />
          </div>
        </label>
        <p v-show="errors.password" class="error">*{{ errors.password }}</p>
      </div>
      <div class="login-btn-container">
        <input type="submit" value="ログインする" class="login-btn" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputType: "password",
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth
          .loginWith("laravelJWT", {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then(() => {
            this.$router.push("/");
          });
      } catch (response) {
        let status = response.response.status;
        if (status == 400) {
          var errors = response.response.data.errors;
          this.errors.name = errors.name ? errors.name[0] : "";
          this.errors.email = errors.email ? errors.email[0] : "";
          this.errors.password = errors.password ? errors.password[0] : "";
        }
        if (status == 404) {
          alert(response.response.data.message);
        }
      }
    },
  },
};
</script>

<style scoped>
.error {
  margin: 5px 0 5px 50px;
}
.login-container {
  background-color: white;
  box-shadow: 2px 2px 4px gray;
}
form {
  margin: 0 auto;
  padding: 20px 0;
  width: 90%;
}
h3 {
  text-align: center;
  padding: 20px;
  font-size: 30px;
  color: white;
  background-color: olivedrab;
}
.user-input-wrapper,
.email-input-wrapper,
.password-input-wrapper {
  height: 75px;
  margin: 0 auto;
}
.password-input-wrapper > label {
  position: relative;
}
.eye {
  position: absolute;
  top: 7px;
  right: 0;
  cursor: pointer;
}
.user-input-wrapper::before {
  content: "";
  background: url(./static/img/user.png);
  background-size: cover;
  vertical-align: bottom;
  width: 40px;
  height: 40px;
  display: inline-block;
}
.email-input-wrapper::before {
  content: "";
  background: url(./static/img/email.png);
  background-size: cover;
  vertical-align: bottom;
  width: 40px;
  height: 40px;
  display: inline-block;
}
.password-input-wrapper::before {
  content: "";
  background: url(./static/img/key.png);
  background-size: cover;
  vertical-align: bottom;
  width: 40px;
  height: 40px;
  display: inline-block;
}
.inp {
  display: inline-block;
  position: relative;
  margin: auto 5px;
  width: 80%;
}

.inp .label {
  position: absolute;
  top: 20px;
  left: 5px;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
}
.inp .border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #07f;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
}
.inp input {
  -webkit-appearance: none;
  width: 100%;
  padding: 0 0 0 5px;
  border: 0;
  font-family: inherit;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
}
.inp input:hover {
  background: rgba(34, 50, 84, 0.03);
}
.inp input:not(:placeholder-shown) + span {
  color: #5a667f;
  transform: translateY(-26px) scale(0.75);
}
.inp input:focus {
  background: none;
  outline: none;
}
.inp input:focus + span {
  color: #07f;
  transform: translateY(-26px) scale(0.75);
}
.inp input:focus + span + .border {
  transform: scaleX(1);
}
.login-btn-container {
  width: 80%;
  margin: 0 auto;
  text-align: right;
}
.login-btn {
  text-align: center;
  width: auto;
  margin: 15px 0 0 0;
  padding: 10px 20px;
  color: white;
  background-color: firebrick;
  box-shadow: 1px 1px 2px maroon;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
