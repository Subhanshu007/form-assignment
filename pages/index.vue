<template>
  <section class="form">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form action="">
            <div class="row">
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.firstName.$error }"
                >
                  <label class="form__label">First Name</label>
                  <input
                    class="form__input"
                    v-model.trim="$v.firstName.$model"
                    @change="setFirstName($v.firstName.$model)"
                  />
                  <div class="error" v-if="!$v.firstName.required">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form__label">Middle Name</label>
                  <input class="form__input" v-model="middleName" />
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.lastName.$error }"
                >
                  <label class="form__label">Last Name</label>
                  <input
                    class="form__input"
                    v-model.trim="$v.lastName.$model"
                  />
                  <div class="error" v-if="!$v.lastName.required">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.myselect.$error }"
                >
                  <select
                    v-model="$v.myselect.$model"
                    name="myselect"
                    id=""
                    :class="status($v.myselect)"
                  >
                    <option selected value>Select One</option>
                    <option value="1">Personal</option>
                    <option value="2">Company</option>
                  </select>
                  <div class="error" v-if="!$v.myselect.required">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  v-if="myselect == 2"
                  :class="{ 'form-group--error': $v.title.$error }"
                >
                  <label class="form__label">Title</label>
                  <input class="form__input" v-model.trim="$v.title.$model" />
                  <div class="error" v-if="!$v.title.required">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.countryselect.$error }"
                >
                  <select
                    v-model="$v.countryselect.$model"
                    name="myselect"
                    id=""
                    :class="status($v.countryselect)"
                  >
                    <option selected value>Select One</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                  </select>
                  <div class="error" v-if="!$v.countryselect.required">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.addressOne.$error }"
                >
                  <label class="form__label">Address One</label>
                  <input
                    class="form__input"
                    v-model.trim="$v.addressOne.$model"
                  />
                  <div class="error" v-if="!$v.addressOne.required">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form__label">Address Two</label>
                  <input class="form__input" v-model="addressTwo" />
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.city.$error }"
                >
                  <label class="form__label">City</label>
                  <input class="form__input" v-model="$v.city.$model" />
                  <div class="error" v-if="!$v.city.required">
                    Field is required
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.zipcode.$error }"
                >
                  <label class="form__label">Zipcode</label>
                  <input class="form__input" v-model="$v.zipcode.$model" />
                  <div class="error" v-if="!$v.zipcode.required">
                    Field is required
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.phone.$error }"
                >
                  <label class="form__label">Phone</label>
                  <input class="form__input" v-model="$v.phone.$model" />
                  <div class="error" v-if="!$v.phone.required">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.email.$error }"
                >
                  <label class="form__label">email</label>
                  <input class="form__input" v-model="$v.email.$model" />
                  <div class="error" v-if="!$v.email.required">
                    Field is required
                  </div>
                  <div
                    class="error"
                    v-if="$v.email.required && !$v.email.email"
                  >
                    Enter Correct Email
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.confirmEmail.$error }"
                >
                  <label class="form__label">confirm email</label>
                  <input class="form__input" v-model="$v.confirmEmail.$model" />
                  <div class="error" v-if="!$v.confirmEmail.required">
                    Field is required
                  </div>
                  <div
                    class="error"
                    v-if="$v.confirmEmail.required && !$v.confirmEmail.sameAs"
                  >
                    Entered email should match
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="text-center">
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      formData: null,
      firstName: "",
      middleName: "",
      lastName: "",
      myselect: null,
      title: null,
      countryselect: null,
      addressOne: null,
      addressTwo: null,
      city: null,
      zipcode: null,
      phone: null,
      userEmail: null,
      email: null,
    };
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    myselect: {
      required,
    },
    countryselect: {
      required,
    },
    title: {
      required,
    },
    addressOne: {
      required,
    },
    city: {
      required,
    },
    zipcode: {
      required,
    },
    phone: {
      required,
    },
    email: {
      required,
      email,
    },
    confirmEmail: {
      required,
      sameAs: sameAs(email),
    },
  },
  methods: {
    setFirstName(value) {
      this.firstName = value;
      this.$v.firstName.$touch();
      const {store} = this.$nuxt.context;
      store.dispatch("getFirstName",this.firstName )
    },
    setAge(value) {
      this.age = value;
      this.$v.age.$touch();
    },
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      };
    },
  },
};
</script>
<style lang="css">
.error {
  color: red;
}
.form__label {
  display: block;
}
</style>
