<script setup>
  import {ref} from 'vue'
  import { useFetch } from '../func/fetch'
  import { store } from '../func/token'

  const login = ref("");
  const pwd = ref("");

  const msg409 = ref("Неверный пароль или имя пользователя")
  const show = ref(false)

  function handleSubmit() {

    const requestContent = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: login.value,
          password: pwd.value,
        }),
    };


    (async () => {
      let token = await useFetch(
        "api/login", 
        requestContent, 
        msg409
      );

      if(token !== null){
         store.set(token.token);
         window.location.hash = '#/';
      }

      show.value = true;
    })();

  }

</script>

<template>
  <div v-show="show" class="page-error text-center mx-auto mt-3">
    <h4 v-show='!store.is_auth()' class="error-404">{{ msg409 }}</h4>
  </div>
  
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-9 col-lg-7 col-xl-6 col-ul-5">
        <main class="content p-3" id="content">
          <div class="px-3 py-2">
            <div class="row">
              <div class="col-12">
                <h2 class="mb-3 text-center">Вход</h2>

                <form @submit.prevent="handleSubmit()">

                  <div class="form-group">
                    <label for="username">Логин</label>
                    <input v-model="login" class="form-control form-control-lg" id="username" placeholder="login" required>
                  </div>

                  <div class="form-group mt-3 ">
                    <label for="username">Пароль</label>
                    <input v-model="pwd" class="form-control form-control-lg" id="password" placeholder="password" required>
                  </div>
                  
                  <div class="form-group text-center mt-3">
                    <div class="row justify-content-center">
                      <div class="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-5 col-ul-4">
                        <button class="btn btn-lg btn-block btn-primary" value="Войти">Войти</button>
                      </div>
                    </div>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>

.content {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
}

.form-group {
  display: flex;
  flex-direction: column;
  
}

label {
  margin-bottom: 10px;
}

.noUi-target,.noUi-target *,html {
    -webkit-tap-highlight-color: transparent
}

.col-form-label,ol ol,ol ul,ul ol,ul ul {
    margin-bottom: 0
}

dl,h1,h2,h3,h4,h5,h6,ol,p,pre,ul {
    margin-top: 0
}

address,dl,ol,p,pre,ul {
    margin-bottom: 1rem
}

.collapsing,.modal,.modal-open,.progress,svg:not(:root) {
    overflow: hidden
}

body,caption {
    text-align: left
}

dd,h1,h2,h3,h4,h5,h6,label {
    margin-bottom: .5rem
}

button,hr,input {
    overflow: visible
}

pre,textarea {
    overflow: auto
}

address,legend {
    line-height: inherit
}

progress,sub,sup {
    vertical-align: baseline
}

.dropdown-menu,.nav,.navbar-nav {
    list-style: none
}

.navbar .navbar-nav .nav-item,.navbar .navbar-nav .nav-link {
    -o-transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out
}

#chat-block,.custom-control-indicator,.custom-file-control,.icon,.modal-dialog,.page-item.disabled .page-link,a.btn.disabled,fieldset[disabled] a.btn {
    pointer-events: none
}

:root {
    --gray-dark: #343a40;
    --blue: #007bff;
    --anime: #ff5c57;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #868e96;
    --primary: #ff5c57;
    --secondary: #868e96;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-ul: 1400px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    --font-family-monospace: "SFMono-Regular",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace
}

@media print {
    blockquote,img,pre,tr {
        page-break-inside: avoid
    }

    *,::after,::before {
        text-shadow: none!important;
        -webkit-box-shadow: none!important;
        box-shadow: none!important
    }

    a,a:visited {
        text-decoration: underline
    }

    abbr[title]::after {
        content: " (" attr(title) ")"
    }

    pre {
        white-space: pre-wrap!important
    }

    blockquote,pre {
        border: 1px solid #999
    }

    thead {
        display: table-header-group
    }

    h2,h3,p {
        orphans: 3;
        widows: 3
    }

    h2,h3 {
        page-break-after: avoid
    }

    .navbar {
        display: none
    }

    .badge {
        border: 1px solid #000
    }

    .table {
        border-collapse: collapse!important
    }

    .table td,.table th {
        background-color: #fff!important
    }

    .table-bordered td,.table-bordered th {
        border: 1px solid #ddd!important
    }
}

article,aside,dialog,figcaption,figure,footer,header,hgroup,legend,main,nav,section {
    display: block
}

label,output {
    display: inline-block
}

*,::after,::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar
}

@-ms-viewport {
    width: device-width
}

body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #e9ebee
}

[tabindex="-1"]:focus {
    outline: 0!important
}

hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0
}

.img-fluid,.img-thumbnail {
    max-width: 100%;
    height: auto
}

abbr[data-original-title],abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0
}

address {
    font-style: normal
}

dt {
    font-weight: 700
}

dd {
    margin-left: 0
}

blockquote,figure {
    margin: 0 0 1rem
}

dfn {
    font-style: italic
}

b,strong {
    font-weight: bolder
}

small {
    font-size: 80%
}

sub,sup {
    position: relative;
    font-size: 75%;
    line-height: 0
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

a {
    color: #ff5c57;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

a:hover {
    color: #ff130a;
    text-decoration: underline
}

a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none
}

a:not([href]):not([tabindex]):focus {
    outline: 0
}

code,kbd,pre,samp {
    font-family: monospace,monospace;
    font-size: 1em
}

pre {
    -ms-overflow-style: scrollbar
}

img {
    vertical-align: middle;
    border-style: none
}

[role=button],a,area,button,input:not([type=range]),label,select,summary,textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation
}

table {
    border-collapse: collapse
}

caption {
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #868e96;
    caption-side: bottom
}

th {
    text-align: inherit
}

button {
    border-radius: 0
}

button:focus {
    outline: dotted 1px;
    outline: -webkit-focus-ring-color auto 5px
}

button,input,optgroup,select,textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

button,select {
    text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    padding: 0;
    border-style: none
}

input[type=radio],input[type=checkbox] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0
}

input[type=date],input[type=time],input[type=datetime-local],input[type=month] {
    -webkit-appearance: listbox
}

textarea {
    resize: vertical
}

fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0
}

legend {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    color: inherit;
    white-space: normal
}

.badge,.btn,.dropdown-header,.dropdown-item,.input-group-addon,.input-group-btn,.navbar-brand {
    white-space: nowrap
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    outline-offset: -2px;
    -webkit-appearance: none
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button
}

.display-1,.display-2,.display-3,.display-4 {
    line-height: 1.2
}

summary {
    display: list-item
}

template {
    display: none
}

[hidden] {
    display: none!important
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit
}

.blockquote,hr {
    margin-bottom: 1rem
}

.display-1,.display-2,.display-3,.display-4,.lead {
    font-weight: 300
}

.h1,h1 {
    font-size: 2.5rem
}

.h2,h2 {
    font-size: 2rem
}

.h3,h3 {
    font-size: 1.75rem
}

.h4,h4 {
    font-size: 1.5rem
}

.h5,h5 {
    font-size: 1.25rem
}

.h6,h6 {
    font-size: 1rem
}

.lead {
    font-size: 1.25rem
}

.display-1 {
    font-size: 6rem
}

.display-2 {
    font-size: 5.5rem
}

.display-3 {
    font-size: 4.5rem
}

.display-4 {
    font-size: 3.5rem
}

.btn,.btn-link,.dropdown-item,.small,small {
    font-weight: 400
}

hr {
    margin-top: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1)
}

.form-check-input,.form-text,.valid-feedback {
    margin-top: .25rem
}

.small,small {
    font-size: 80%
}

.mark,mark {
    padding: .2em;
    background-color: #fcf8e3
}

.list-inline,.list-unstyled {
    padding-left: 0;
    list-style: none
}

.list-inline-item {
    display: inline-block
}

.list-inline-item:not(:last-child) {
    margin-right: 5px
}

.initialism {
    font-size: 90%;
    text-transform: uppercase
}

.blockquote {
    font-size: 1.25rem
}

.blockquote-footer {
    display: block;
    font-size: 80%;
    color: #868e96
}

.blockquote-footer::before {
    content: "\2014 \00A0"
}

.img-thumbnail {
    padding: .25rem;
    background-color: #e9ebee;
    border: 1px solid #ddd;
    border-radius: 2px;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.075);
    box-shadow: 0 1px 2px rgba(0,0,0,.075)
}

.container,.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%
}

.figure {
    display: inline-block
}

.figure-img {
    margin-bottom: .5rem;
    line-height: 1
}

.figure-caption {
    font-size: 90%;
    color: #868e96
}

@media (min-width: 576px) {
    .container {
        max-width:540px
    }
}

@media (min-width: 768px) {
    .container {
        max-width:720px
    }
}

@media (min-width: 992px) {
    .container {
        max-width:960px
    }
}

@media (min-width: 1200px) {
    .container {
        max-width:1140px
    }
}

@media (min-width: 1400px) {
    .container {
        max-width:1340px
    }
}

.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px
}

.form-control,.form-control-file,.form-control-range,.form-text {
    display: block
}

.no-gutters {
    margin-right: 0;
    margin-left: 0
}

.no-gutters>.col,.no-gutters>[class*=col-] {
    padding-right: 0;
    padding-left: 0
}

.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-ul,.col-ul-1,.col-ul-10,.col-ul-11,.col-ul-12,.col-ul-2,.col-ul-3,.col-ul-4,.col-ul-5,.col-ul-6,.col-ul-7,.col-ul-8,.col-ul-9,.col-ul-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px
}

.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%
}

.col-1,.col-auto {
    -webkit-box-flex: 0
}

.col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none
}

.col-1 {
    -ms-flex: 0 0 8.33333%;
    flex: 0 0 8.33333%;
    max-width: 8.33333%
}

.col-2,.col-3 {
    -webkit-box-flex: 0
}

.col-2 {
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%
}

.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
}

.col-4,.col-5 {
    -webkit-box-flex: 0
}

.col-4 {
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%
}

.col-5 {
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%
}

.col-6,.col-7 {
    -webkit-box-flex: 0
}

.col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
}

.col-7 {
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%
}

.col-8,.col-9 {
    -webkit-box-flex: 0
}

.col-8 {
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%
}

.col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
}

.col-10,.col-11 {
    -webkit-box-flex: 0
}

.col-10 {
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%
}

.col-11 {
    -ms-flex: 0 0 91.66667%;
    flex: 0 0 91.66667%;
    max-width: 91.66667%
}

.col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
}

.order-first {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1
}

.order-1 {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1
}

.order-2 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
}

.order-3 {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3
}

.order-4 {
    -webkit-box-ordinal-group: 5;
    -ms-flex-order: 4;
    order: 4
}

.order-5 {
    -webkit-box-ordinal-group: 6;
    -ms-flex-order: 5;
    order: 5
}

.order-6 {
    -webkit-box-ordinal-group: 7;
    -ms-flex-order: 6;
    order: 6
}

.order-7 {
    -webkit-box-ordinal-group: 8;
    -ms-flex-order: 7;
    order: 7
}

.order-8 {
    -webkit-box-ordinal-group: 9;
    -ms-flex-order: 8;
    order: 8
}

.order-9 {
    -webkit-box-ordinal-group: 10;
    -ms-flex-order: 9;
    order: 9
}

.order-10 {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    order: 10
}

.order-11 {
    -webkit-box-ordinal-group: 12;
    -ms-flex-order: 11;
    order: 11
}

.order-12 {
    -webkit-box-ordinal-group: 13;
    -ms-flex-order: 12;
    order: 12
}

.offset-1 {
    margin-left: 8.33333%
}

.offset-2 {
    margin-left: 16.66667%
}

.offset-3 {
    margin-left: 25%
}

.offset-4 {
    margin-left: 33.33333%
}

.offset-5 {
    margin-left: 41.66667%
}

.offset-6 {
    margin-left: 50%
}

.offset-7 {
    margin-left: 58.33333%
}

.offset-8 {
    margin-left: 66.66667%
}

.offset-9 {
    margin-left: 75%
}

.offset-10 {
    margin-left: 83.33333%
}

.offset-11 {
    margin-left: 91.66667%
}

@media (min-width: 576px) {
    .col-sm {
        -ms-flex-preferred-size:0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }

    .col-sm-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-sm-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-sm-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-sm-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-sm-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-sm-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-sm-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-sm-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-sm-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-sm-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-sm-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-sm-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-sm-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-sm-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }

    .order-sm-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .order-sm-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .order-sm-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .order-sm-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4
    }

    .order-sm-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5
    }

    .order-sm-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6
    }

    .order-sm-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7
    }

    .order-sm-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8
    }

    .order-sm-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9
    }

    .order-sm-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10
    }

    .order-sm-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11
    }

    .order-sm-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12
    }

    .offset-sm-0 {
        margin-left: 0
    }

    .offset-sm-1 {
        margin-left: 8.33333%
    }

    .offset-sm-2 {
        margin-left: 16.66667%
    }

    .offset-sm-3 {
        margin-left: 25%
    }

    .offset-sm-4 {
        margin-left: 33.33333%
    }

    .offset-sm-5 {
        margin-left: 41.66667%
    }

    .offset-sm-6 {
        margin-left: 50%
    }

    .offset-sm-7 {
        margin-left: 58.33333%
    }

    .offset-sm-8 {
        margin-left: 66.66667%
    }

    .offset-sm-9 {
        margin-left: 75%
    }

    .offset-sm-10 {
        margin-left: 83.33333%
    }

    .offset-sm-11 {
        margin-left: 91.66667%
    }
}

@media (min-width: 768px) {
    .col-md {
        -ms-flex-preferred-size:0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }

    .col-md-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-md-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-md-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-md-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-md-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-md-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-md-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-md-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-md-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-md-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-md-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-md-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-md-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-md-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }

    .order-md-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .order-md-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .order-md-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .order-md-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4
    }

    .order-md-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5
    }

    .order-md-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6
    }

    .order-md-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7
    }

    .order-md-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8
    }

    .order-md-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9
    }

    .order-md-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10
    }

    .order-md-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11
    }

    .order-md-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12
    }

    .offset-md-0 {
        margin-left: 0
    }

    .offset-md-1 {
        margin-left: 8.33333%
    }

    .offset-md-2 {
        margin-left: 16.66667%
    }

    .offset-md-3 {
        margin-left: 25%
    }

    .offset-md-4 {
        margin-left: 33.33333%
    }

    .offset-md-5 {
        margin-left: 41.66667%
    }

    .offset-md-6 {
        margin-left: 50%
    }

    .offset-md-7 {
        margin-left: 58.33333%
    }

    .offset-md-8 {
        margin-left: 66.66667%
    }

    .offset-md-9 {
        margin-left: 75%
    }

    .offset-md-10 {
        margin-left: 83.33333%
    }

    .offset-md-11 {
        margin-left: 91.66667%
    }
}

@media (min-width: 992px) {
    .col-lg {
        -ms-flex-preferred-size:0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }

    .col-lg-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-lg-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-lg-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-lg-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-lg-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-lg-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-lg-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-lg-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-lg-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-lg-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-lg-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-lg-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-lg-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-lg-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }

    .order-lg-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .order-lg-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .order-lg-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .order-lg-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4
    }

    .order-lg-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5
    }

    .order-lg-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6
    }

    .order-lg-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7
    }

    .order-lg-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8
    }

    .order-lg-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9
    }

    .order-lg-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10
    }

    .order-lg-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11
    }

    .order-lg-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12
    }

    .offset-lg-0 {
        margin-left: 0
    }

    .offset-lg-1 {
        margin-left: 8.33333%
    }

    .offset-lg-2 {
        margin-left: 16.66667%
    }

    .offset-lg-3 {
        margin-left: 25%
    }

    .offset-lg-4 {
        margin-left: 33.33333%
    }

    .offset-lg-5 {
        margin-left: 41.66667%
    }

    .offset-lg-6 {
        margin-left: 50%
    }

    .offset-lg-7 {
        margin-left: 58.33333%
    }

    .offset-lg-8 {
        margin-left: 66.66667%
    }

    .offset-lg-9 {
        margin-left: 75%
    }

    .offset-lg-10 {
        margin-left: 83.33333%
    }

    .offset-lg-11 {
        margin-left: 91.66667%
    }
}

@media (min-width: 1200px) {
    .col-xl {
        -ms-flex-preferred-size:0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }

    .col-xl-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-xl-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-xl-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-xl-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-xl-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-xl-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-xl-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-xl-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-xl-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-xl-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-xl-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-xl-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-xl-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-xl-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }

    .order-xl-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .order-xl-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .order-xl-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .order-xl-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4
    }

    .order-xl-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5
    }

    .order-xl-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6
    }

    .order-xl-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7
    }

    .order-xl-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8
    }

    .order-xl-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9
    }

    .order-xl-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10
    }

    .order-xl-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11
    }

    .order-xl-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12
    }

    .offset-xl-0 {
        margin-left: 0
    }

    .offset-xl-1 {
        margin-left: 8.33333%
    }

    .offset-xl-2 {
        margin-left: 16.66667%
    }

    .offset-xl-3 {
        margin-left: 25%
    }

    .offset-xl-4 {
        margin-left: 33.33333%
    }

    .offset-xl-5 {
        margin-left: 41.66667%
    }

    .offset-xl-6 {
        margin-left: 50%
    }

    .offset-xl-7 {
        margin-left: 58.33333%
    }

    .offset-xl-8 {
        margin-left: 66.66667%
    }

    .offset-xl-9 {
        margin-left: 75%
    }

    .offset-xl-10 {
        margin-left: 83.33333%
    }

    .offset-xl-11 {
        margin-left: 91.66667%
    }
}

@media (min-width: 1400px) {
    .col-ul {
        -ms-flex-preferred-size:0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }

    .col-ul-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }

    .col-ul-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }

    .col-ul-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }

    .col-ul-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-ul-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }

    .col-ul-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }

    .col-ul-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-ul-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }

    .col-ul-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }

    .col-ul-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-ul-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }

    .col-ul-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }

    .col-ul-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-ul-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }

    .order-ul-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .order-ul-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .order-ul-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .order-ul-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4
    }

    .order-ul-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5
    }

    .order-ul-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6
    }

    .order-ul-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7
    }

    .order-ul-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8
    }

    .order-ul-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9
    }

    .order-ul-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10
    }

    .order-ul-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11
    }

    .order-ul-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12
    }

    .offset-ul-0 {
        margin-left: 0
    }

    .offset-ul-1 {
        margin-left: 8.33333%
    }

    .offset-ul-2 {
        margin-left: 16.66667%
    }

    .offset-ul-3 {
        margin-left: 25%
    }

    .offset-ul-4 {
        margin-left: 33.33333%
    }

    .offset-ul-5 {
        margin-left: 41.66667%
    }

    .offset-ul-6 {
        margin-left: 50%
    }

    .offset-ul-7 {
        margin-left: 58.33333%
    }

    .offset-ul-8 {
        margin-left: 66.66667%
    }

    .offset-ul-9 {
        margin-left: 75%
    }

    .offset-ul-10 {
        margin-left: 83.33333%
    }

    .offset-ul-11 {
        margin-left: 91.66667%
    }
}

.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent
}

.table td,.table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #e9ecef
}

.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #e9ecef
}

.table tbody+tbody {
    border-top: 2px solid #e9ecef
}

.table .table {
    background-color: #e9ebee
}

.table-sm td,.table-sm th {
    padding: .3rem
}

.table-bordered,.table-bordered td,.table-bordered th {
    border: 1px solid #e9ecef
}

.table-bordered thead td,.table-bordered thead th {
    border-bottom-width: 2px
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.05)
}

.table-hover tbody tr:hover {
    background-color: rgba(0,0,0,.075)
}

.table-primary,.table-primary>td,.table-primary>th {
    background-color: #ffd1d0
}

.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th {
    background-color: #ffb8b7
}

.table-secondary,.table-secondary>td,.table-secondary>th {
    background-color: #dddfe2
}

.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th {
    background-color: #cfd2d6
}

.table-success,.table-success>td,.table-success>th {
    background-color: #c3e6cb
}

.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th {
    background-color: #b1dfbb
}

.table-info,.table-info>td,.table-info>th {
    background-color: #bee5eb
}

.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th {
    background-color: #abdde5
}

.table-warning,.table-warning>td,.table-warning>th {
    background-color: #ffeeba
}

.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th {
    background-color: #ffe8a1
}

.table-danger,.table-danger>td,.table-danger>th {
    background-color: #f5c6cb
}

.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th {
    background-color: #f1b0b7
}

.table-light,.table-light>td,.table-light>th {
    background-color: #fdfdfe
}

.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th {
    background-color: #ececf6
}

.table-dark,.table-dark>td,.table-dark>th {
    background-color: #c6c8ca
}

.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th {
    background-color: #b9bbbe
}

.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th {
    background-color: rgba(0,0,0,.075)
}

.table .thead-dark th {
    color: #e9ebee;
    background-color: #212529;
    border-color: #32383e
}

.table .thead-light th {
    color: #495057;
    background-color: #e9ecef;
    border-color: #e9ecef
}

.table-dark {
    color: #e9ebee;
    background-color: #212529
}

.table-dark td,.table-dark th,.table-dark thead th {
    border-color: #32383e
}

.table-dark.table-bordered,.table-responsive.table-bordered {
    border: 0
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(255,255,255,.05)
}

.table-dark.table-hover tbody tr:hover {
    background-color: rgba(255,255,255,.075)
}

@media (max-width: 575px) {
    .table-responsive-sm {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-sm.table-bordered {
        border: 0
    }
}

@media (max-width: 767px) {
    .table-responsive-md {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-md.table-bordered {
        border: 0
    }
}

@media (max-width: 991px) {
    .table-responsive-lg {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-lg.table-bordered {
        border: 0
    }
}

@media (max-width: 1199px) {
    .table-responsive-xl {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-xl.table-bordered {
        border: 0
    }
}

@media (max-width: 1399px) {
    .table-responsive-ul {
        display:block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .table-responsive-ul.table-bordered {
        border: 0
    }
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
}

.form-control {
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s
}

.form-control::-ms-expand {
    background-color: transparent;
    border: 0
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #ffd7d6;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,92,87,.25);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,92,87,.25)
}

.form-control::-webkit-input-placeholder {
    color: #868e96;
    opacity: 1
}

.form-control:-ms-input-placeholder {
    color: #868e96;
    opacity: 1
}

.form-control::-ms-input-placeholder {
    color: #868e96;
    opacity: 1
}

.form-control::placeholder {
    color: #868e96;
    opacity: 1
}

.form-control:disabled,.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1
}

select.form-control:not([size]):not([multiple]) {
    height: calc(2.25rem + 2px)
}

select.form-control:focus::-ms-value {
    color: #495057;
    background-color: #fff
}

.col-form-label {
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    line-height: 1.5
}

.col-form-label-lg {
    padding-top: calc(.5rem + 1px);
    padding-bottom: calc(.5rem + 1px);
    font-size: 1.25rem;
    line-height: 1.5
}

.col-form-label-sm {
    padding-top: calc(.25rem + 1px);
    padding-bottom: calc(.25rem + 1px);
    font-size: .875rem;
    line-height: 1.5
}

.col-form-legend,.form-control-plaintext {
    padding-top: .375rem;
    padding-bottom: .375rem;
    margin-bottom: 0
}

.col-form-legend {
    font-size: 1rem
}

.form-control-plaintext {
    line-height: 1.5;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0
}

.custom-file-input.is-valid~.custom-file-control,.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-file-input:valid~.custom-file-control,.was-validated .custom-select:valid,.was-validated .form-control:valid {
    border-color: #28a745
}

.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.form-control-plaintext.input-group-addon,.input-group-lg>.input-group-btn>.form-control-plaintext.btn,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.form-control-plaintext.input-group-addon,.input-group-sm>.input-group-btn>.form-control-plaintext.btn {
    padding-right: 0;
    padding-left: 0
}

.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 2px
}

.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]) {
    height: calc(1.8125rem + 2px)
}

.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 2px
}

.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]) {
    height: calc(2.875rem + 2px)
}

.form-group {
    margin-bottom: 1rem
}

.form-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px
}

.form-row>.col,.form-row>[class*=col-] {
    padding-right: 5px;
    padding-left: 5px
}

.form-check {
    position: relative;
    display: block;
    margin-bottom: .5rem
}

.form-check.disabled .form-check-label {
    color: #868e96
}

.form-check-label {
    padding-left: 1.25rem;
    margin-bottom: 0
}

.invalid-tooltip,.valid-tooltip {
    position: absolute;
    top: 100%;
    width: 250px;
    padding: .5rem;
    line-height: 1;
    border-radius: .2rem;
    z-index: 5
}

.form-check-input {
    position: absolute;
    margin-left: -1.25rem
}

.form-check-inline {
    display: inline-block;
    margin-right: .75rem
}

.valid-feedback,.valid-tooltip {
    display: none;
    font-size: .875rem
}

.form-check-inline .form-check-label {
    vertical-align: middle
}

.valid-feedback {
    color: #28a745
}

.valid-tooltip {
    margin-top: .1rem;
    color: #fff;
    background-color: rgba(40,167,69,.8)
}

.custom-control-input.is-valid~.custom-control-description,.form-check-input.is-valid+.form-check-label,.was-validated .custom-control-input:valid~.custom-control-description,.was-validated .form-check-input:valid+.form-check-label {
    color: #28a745
}

.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
    box-shadow: 0 0 0 .2rem rgba(40,167,69,.25)
}

.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip {
    display: block
}

.custom-control-input.is-valid~.custom-control-indicator,.was-validated .custom-control-input:valid~.custom-control-indicator {
    background-color: rgba(40,167,69,.25)
}

.custom-file-input.is-valid~.custom-file-control::before,.was-validated .custom-file-input:valid~.custom-file-control::before {
    border-color: inherit
}

.custom-file-input.is-invalid~.custom-file-control,.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-file-input:invalid~.custom-file-control,.was-validated .custom-select:invalid,.was-validated .form-control:invalid {
    border-color: #dc3545
}

.custom-file-input.is-valid:focus,.was-validated .custom-file-input:valid:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
    box-shadow: 0 0 0 .2rem rgba(40,167,69,.25)
}

.invalid-feedback {
    display: none;
    margin-top: .25rem;
    font-size: .875rem;
    color: #dc3545
}

.invalid-tooltip {
    display: none;
    margin-top: .1rem;
    font-size: .875rem;
    color: #fff;
    background-color: rgba(220,53,69,.8)
}

.custom-control-input.is-invalid~.custom-control-description,.form-check-input.is-invalid+.form-check-label,.was-validated .custom-control-input:invalid~.custom-control-description,.was-validated .form-check-input:invalid+.form-check-label {
    color: #dc3545
}

.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
    box-shadow: 0 0 0 .2rem rgba(220,53,69,.25)
}

.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip {
    display: block
}

.custom-control-input.is-invalid~.custom-control-indicator,.was-validated .custom-control-input:invalid~.custom-control-indicator {
    background-color: rgba(220,53,69,.25)
}

.custom-file-input.is-invalid~.custom-file-control::before,.was-validated .custom-file-input:invalid~.custom-file-control::before {
    border-color: inherit
}

.custom-file-input.is-invalid:focus,.was-validated .custom-file-input:invalid:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
    box-shadow: 0 0 0 .2rem rgba(220,53,69,.25)
}

.form-inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.form-inline .form-check {
    width: 100%
}

@media (min-width: 576px) {
    .form-inline label {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-bottom: 0
    }

    .form-inline .form-check,.form-inline .form-group {
        display: -webkit-box;
        display: -ms-flexbox;
        margin-bottom: 0
    }

    .form-inline .form-group {
        display: flex;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle
    }

    .form-inline .form-control-plaintext {
        display: inline-block
    }

    .form-inline .input-group {
        width: auto
    }

    .form-inline .form-check {
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: auto;
        margin-top: 0
    }

    .form-inline .form-check-label {
        padding-left: 0
    }

    .form-inline .form-check-input {
        position: relative;
        margin-top: 0;
        margin-right: .25rem;
        margin-left: 0
    }

    .form-inline .custom-control {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding-left: 0
    }

    .form-inline .custom-control-indicator {
        position: static;
        display: inline-block;
        margin-right: .25rem;
        vertical-align: text-bottom
    }

    .form-inline .has-feedback .form-control-feedback {
        top: 0
    }
}

.btn-group-vertical,.custom-controls-stacked,.navbar-nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal
}

.btn-block,input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block {
    width: 100%
}

.collapsing,.dropdown,.dropup {
    position: relative
}

.btn,.custom-select,.navbar-toggler-icon {
    vertical-align: middle
}

.btn {
    display: inline-block;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 2px;
    -webkit-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    -o-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out
}

.btn:focus,.btn:hover {
    text-decoration: none
}

.btn.focus,.btn:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 .2rem rgba(255,92,87,.25);
    box-shadow: 0 0 0 .2rem rgba(255,92,87,.25)
}

.btn.disabled,.btn:disabled {
    opacity: .65;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn:not([disabled]):not(.disabled).active,.btn:not([disabled]):not(.disabled):active {
    background-image: none;
    -webkit-box-shadow: 0 0 0 .2rem rgba(255,92,87,.25),inset 0 3px 5px rgba(0,0,0,.125);
    box-shadow: 0 0 0 .2rem rgba(255,92,87,.25),inset 0 3px 5px rgba(0,0,0,.125)
}

.btn-primary {
    color: #fff;
    background-color: #ff5c57;
    border-color: #ff5c57;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-primary:hover {
    color: #fff;
    background-color: #ff3730;
    border-color: #ff2b24
}

.btn-primary.focus,.btn-primary:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,92,87,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,92,87,.5)
}

.btn-primary.disabled,.btn-primary:disabled {
    background-color: #ff5c57;
    border-color: #ff5c57
}

.btn-primary:not([disabled]):not(.disabled).active,.btn-primary:not([disabled]):not(.disabled):active,.show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #ff2b24;
    border-color: #ff1f17;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(255,92,87,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(255,92,87,.5)
}

.btn-secondary {
    color: #fff;
    background-color: #868e96;
    border-color: #868e96;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-secondary:hover {
    color: #fff;
    background-color: #727b84;
    border-color: #6c757d
}

.btn-secondary.focus,.btn-secondary:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(134,142,150,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(134,142,150,.5)
}

.btn-secondary.disabled,.btn-secondary:disabled {
    background-color: #868e96;
    border-color: #868e96
}

.btn-secondary:not([disabled]):not(.disabled).active,.btn-secondary:not([disabled]):not(.disabled):active,.show>.btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #6c757d;
    border-color: #666e76;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(134,142,150,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(134,142,150,.5)
}

.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34
}

.btn-success.focus,.btn-success:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(40,167,69,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(40,167,69,.5)
}

.btn-success.disabled,.btn-success:disabled {
    background-color: #28a745;
    border-color: #28a745
}

.btn-success:not([disabled]):not(.disabled).active,.btn-success:not([disabled]):not(.disabled):active,.show>.btn-success.dropdown-toggle {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(40,167,69,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(40,167,69,.5)
}

.btn-info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-info:hover {
    color: #fff;
    background-color: #138496;
    border-color: #117a8b
}

.btn-info.focus,.btn-info:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(23,162,184,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(23,162,184,.5)
}

.btn-info.disabled,.btn-info:disabled {
    background-color: #17a2b8;
    border-color: #17a2b8
}

.btn-info:not([disabled]):not(.disabled).active,.btn-info:not([disabled]):not(.disabled):active,.show>.btn-info.dropdown-toggle {
    color: #fff;
    background-color: #117a8b;
    border-color: #10707f;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(23,162,184,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(23,162,184,.5)
}

.btn-warning {
    color: #111;
    background-color: #ffc107;
    border-color: #ffc107;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-warning:hover {
    color: #111;
    background-color: #e0a800;
    border-color: #d39e00
}

.btn-warning.focus,.btn-warning:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,193,7,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-warning.disabled,.btn-warning:disabled {
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-warning:not([disabled]):not(.disabled).active,.btn-warning:not([disabled]):not(.disabled):active,.show>.btn-warning.dropdown-toggle {
    color: #111;
    background-color: #d39e00;
    border-color: #c69500;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(255,193,7,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-danger:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130
}

.btn-danger.focus,.btn-danger:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(220,53,69,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(220,53,69,.5)
}

.btn-danger.disabled,.btn-danger:disabled {
    background-color: #dc3545;
    border-color: #dc3545
}

.btn-danger:not([disabled]):not(.disabled).active,.btn-danger:not([disabled]):not(.disabled):active,.show>.btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #bd2130;
    border-color: #b21f2d;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(220,53,69,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(220,53,69,.5)
}

.btn-light {
    color: #111;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-light:hover {
    color: #111;
    background-color: #e2e6ea;
    border-color: #dae0e5
}

.btn-light.focus,.btn-light:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(248,249,250,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(248,249,250,.5)
}

.btn-light.disabled,.btn-light:disabled {
    background-color: #f8f9fa;
    border-color: #f8f9fa
}

.btn-light:not([disabled]):not(.disabled).active,.btn-light:not([disabled]):not(.disabled):active,.show>.btn-light.dropdown-toggle {
    color: #111;
    background-color: #dae0e5;
    border-color: #d3d9df;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(248,249,250,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(248,249,250,.5)
}

.btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124
}

.btn-dark.focus,.btn-dark:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(52,58,64,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(52,58,64,.5)
}

.btn-dark.disabled,.btn-dark:disabled {
    background-color: #343a40;
    border-color: #343a40
}

.btn-dark:not([disabled]):not(.disabled).active,.btn-dark:not([disabled]):not(.disabled):active,.show>.btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(52,58,64,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(52,58,64,.5)
}

.btn-outline-primary {
    color: #ff5c57;
    background-color: transparent;
    background-image: none;
    border-color: #ff5c57
}

.btn-outline-primary:hover {
    color: #fff;
    background-color: #ff5c57;
    border-color: #ff5c57
}

.btn-outline-primary.focus,.btn-outline-primary:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(255,92,87,.5);
    box-shadow: 0 0 0 .2rem rgba(255,92,87,.5)
}

.btn-outline-primary.disabled,.btn-outline-primary:disabled {
    color: #ff5c57;
    background-color: transparent
}

.btn-outline-primary:not([disabled]):not(.disabled).active,.btn-outline-primary:not([disabled]):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #ff5c57;
    border-color: #ff5c57;
    -webkit-box-shadow: 0 0 0 .2rem rgba(255,92,87,.5);
    box-shadow: 0 0 0 .2rem rgba(255,92,87,.5)
}

.btn-outline-secondary {
    color: #868e96;
    background-color: transparent;
    background-image: none;
    border-color: #868e96
}

.btn-outline-secondary:hover {
    color: #fff;
    background-color: #868e96;
    border-color: #868e96
}

.btn-outline-secondary.focus,.btn-outline-secondary:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(134,142,150,.5);
    box-shadow: 0 0 0 .2rem rgba(134,142,150,.5)
}

.btn-outline-secondary.disabled,.btn-outline-secondary:disabled {
    color: #868e96;
    background-color: transparent
}

.btn-outline-secondary:not([disabled]):not(.disabled).active,.btn-outline-secondary:not([disabled]):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #868e96;
    border-color: #868e96;
    -webkit-box-shadow: 0 0 0 .2rem rgba(134,142,150,.5);
    box-shadow: 0 0 0 .2rem rgba(134,142,150,.5)
}

.btn-outline-success {
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745
}

.btn-outline-success:hover {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745
}

.btn-outline-success.focus,.btn-outline-success:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
    box-shadow: 0 0 0 .2rem rgba(40,167,69,.5)
}

.btn-outline-success.disabled,.btn-outline-success:disabled {
    color: #28a745;
    background-color: transparent
}

.btn-outline-success:not([disabled]):not(.disabled).active,.btn-outline-success:not([disabled]):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    -webkit-box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
    box-shadow: 0 0 0 .2rem rgba(40,167,69,.5)
}

.btn-outline-info {
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8
}

.btn-outline-info:hover {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8
}

.btn-outline-info.focus,.btn-outline-info:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
    box-shadow: 0 0 0 .2rem rgba(23,162,184,.5)
}

.btn-outline-info.disabled,.btn-outline-info:disabled {
    color: #17a2b8;
    background-color: transparent
}

.btn-outline-info:not([disabled]):not(.disabled).active,.btn-outline-info:not([disabled]):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    -webkit-box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
    box-shadow: 0 0 0 .2rem rgba(23,162,184,.5)
}

.btn-outline-warning {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107
}

.btn-outline-warning:hover {
    color: #fff;
    background-color: #ffc107;
    border-color: #ffc107
}

.btn-outline-warning.focus,.btn-outline-warning:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-outline-warning.disabled,.btn-outline-warning:disabled {
    color: #ffc107;
    background-color: transparent
}

.btn-outline-warning:not([disabled]):not(.disabled).active,.btn-outline-warning:not([disabled]):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle {
    color: #fff;
    background-color: #ffc107;
    border-color: #ffc107;
    -webkit-box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
    box-shadow: 0 0 0 .2rem rgba(255,193,7,.5)
}

.btn-outline-danger {
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545
}

.btn-outline-danger:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545
}

.btn-outline-danger.focus,.btn-outline-danger:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
    box-shadow: 0 0 0 .2rem rgba(220,53,69,.5)
}

.btn-outline-danger.disabled,.btn-outline-danger:disabled {
    color: #dc3545;
    background-color: transparent
}

.btn-outline-danger:not([disabled]):not(.disabled).active,.btn-outline-danger:not([disabled]):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    -webkit-box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
    box-shadow: 0 0 0 .2rem rgba(220,53,69,.5)
}

.btn-outline-light {
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa
}

.btn-outline-light:hover {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa
}

.btn-outline-light.focus,.btn-outline-light:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
    box-shadow: 0 0 0 .2rem rgba(248,249,250,.5)
}

.btn-outline-light.disabled,.btn-outline-light:disabled {
    color: #f8f9fa;
    background-color: transparent
}

.btn-outline-light:not([disabled]):not(.disabled).active,.btn-outline-light:not([disabled]):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    -webkit-box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
    box-shadow: 0 0 0 .2rem rgba(248,249,250,.5)
}

.btn-outline-dark {
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40
}

.btn-outline-dark:hover {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40
}

.btn-outline-dark.focus,.btn-outline-dark:focus {
    -webkit-box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
    box-shadow: 0 0 0 .2rem rgba(52,58,64,.5)
}

.btn-outline-dark.disabled,.btn-outline-dark:disabled {
    color: #343a40;
    background-color: transparent
}

.btn-outline-dark:not([disabled]):not(.disabled).active,.btn-outline-dark:not([disabled]):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    -webkit-box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
    box-shadow: 0 0 0 .2rem rgba(52,58,64,.5)
}

.btn-link,.btn-link:hover {
    background-color: transparent
}

.btn-link {
    color: #ff5c57
}

.btn-link:hover {
    color: #ff130a;
    text-decoration: underline;
    border-color: transparent
}

.btn-link.focus,.btn-link:focus {
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn-link.disabled,.btn-link:disabled {
    color: #868e96
}

.btn-group-lg>.btn,.btn-lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 2px
}

.btn-group-sm>.btn,.btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 2px
}

.btn-block {
    display: block
}

.btn-block+.btn-block {
    margin-top: .5rem
}

.dropdown-toggle::after,.dropup .dropdown-toggle::after {
    width: 0;
    vertical-align: .255em;
    content: "";
    height: 0
}

.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear
}

.fade.show {
    opacity: 1
}

.collapse {
    display: none
}

.collapse.show {
    display: block
}

tr.collapse.show {
    display: table-row
}

tbody.collapse.show {
    display: table-row-group
}

.collapsing {
    height: 0;
    -webkit-transition: height .35s ease;
    -o-transition: height .35s ease;
    transition: height .35s ease
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent
}

.dropdown-toggle:empty::after {
    margin-left: 0
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2px;
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.175);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.175)
}

.dropup .dropdown-menu {
    margin-top: 0;
    margin-bottom: .125rem
}

.dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    border-top: 0;
    border-right: .3em solid transparent;
    border-bottom: .3em solid;
    border-left: .3em solid transparent
}

.dropup .dropdown-toggle:empty::after {
    margin-left: 0
}

.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef
}

.dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    color: #212529;
    text-align: inherit;
    background: 0 0;
    border: 0
}

.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn,.btn-group-vertical>.btn:not(:first-child):not(:last-child),.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn,.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle),.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child) {
    border-radius: 0
}

.dropdown-item:focus,.dropdown-item:hover {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa
}

.dropdown-item.active,.dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #ff5c57
}

.dropdown-item.disabled,.dropdown-item:disabled {
    color: #868e96;
    background-color: transparent
}

.dropdown-menu.show {
    display: block
}

.dropdown-header {
    display: block;
    padding: .5rem 1.5rem;
    margin-bottom: 0;
    font-size: .875rem;
    color: #868e96
}

.btn-group,.btn-group-vertical {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle
}

.btn-toolbar,.input-group {
    display: -webkit-box;
    display: -ms-flexbox
}

.btn-group-vertical>.btn,.btn-group>.btn {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto
}

.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
    z-index: 2
}

.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group {
    margin-left: -1px
}

.btn+.dropdown-toggle-split::after,.btn-group>.btn:first-child {
    margin-left: 0
}

.btn-toolbar {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.btn-toolbar .input-group {
    width: auto
}

.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.btn-group>.btn-group {
    float: left
}

.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.btn+.dropdown-toggle-split {
    padding-right: .5625rem;
    padding-left: .5625rem
}

.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split {
    padding-right: .375rem;
    padding-left: .375rem
}

.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split {
    padding-right: .75rem;
    padding-left: .75rem
}

.btn-group.show .dropdown-toggle {
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125)
}

.btn-group.show .dropdown-toggle.btn-link {
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn-group-vertical {
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.btn-group-vertical .btn,.btn-group-vertical .btn-group {
    width: 100%
}

.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group {
    margin-top: -1px;
    margin-left: 0
}

.btn-group-vertical>.btn:first-child:not(:last-child) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}

.btn-group-vertical>.btn:last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}

.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox] {
    position: absolute;
    clip: rect(0,0,0,0);
    pointer-events: none
}

.custom-control,.input-group,.input-group-btn,.input-group-btn>.btn {
    position: relative
}

.input-group {
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%
}

.input-group .form-control {
    position: relative;
    z-index: 2;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0
}

.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover,.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover {
    z-index: 3
}

.input-group .form-control,.input-group-addon,.input-group-btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.input-group-addon {
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 2px
}

.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn {
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: 2px
}

.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    border-radius: 2px
}

.input-group-addon input[type=radio],.input-group-addon input[type=checkbox] {
    margin-top: 0
}

.input-group .form-control:not(:last-child),.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.input-group-addon:not(:last-child) {
    border-right: 0
}

.input-group .form-control:not(:first-child),.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.form-control+.input-group-addon:not(:first-child) {
    border-left: 0
}

.input-group-btn {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    font-size: 0
}

.input-group-btn>.btn+.btn {
    margin-left: -1px
}

.input-group-btn:first-child>.btn+.btn {
    margin-left: 0
}

.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group {
    margin-right: -1px
}

.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group {
    z-index: 2;
    margin-left: 0
}

.input-group-btn:not(:first-child)>.btn-group:first-child,.input-group-btn:not(:first-child)>.btn:first-child {
    margin-left: -1px
}

.card>hr,.custom-controls-stacked .custom-control+.custom-control {
    margin-left: 0
}

.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover {
    z-index: 3
}

.custom-control {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    min-height: 1.5rem;
    padding-left: 1.5rem;
    margin-right: 1rem
}

.custom-control-input {
    position: absolute;
    z-index: -1;
    opacity: 0
}

.custom-control-input:checked~.custom-control-indicator {
    color: #fff;
    background-color: #ff5c57;
    -webkit-box-shadow: none;
    box-shadow: none
}

.custom-control-input:focus~.custom-control-indicator {
    -webkit-box-shadow: 0 0 0 1px #e9ebee,0 0 0 .2rem rgba(255,92,87,.25);
    box-shadow: 0 0 0 1px #e9ebee,0 0 0 .2rem rgba(255,92,87,.25)
}

.custom-control-input:active~.custom-control-indicator {
    color: #fff;
    background-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none
}

.custom-control-input:disabled~.custom-control-indicator {
    background-color: #e9ecef
}

.custom-control-input:disabled~.custom-control-description {
    color: #868e96
}

.custom-control-indicator {
    position: absolute;
    top: .25rem;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #ddd;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    -webkit-box-shadow: inset 0 .25rem .25rem rgba(0,0,0,.1);
    box-shadow: inset 0 .25rem .25rem rgba(0,0,0,.1)
}

.custom-file-control,[role=button] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

.custom-checkbox .custom-control-indicator {
    border-radius: 2px
}

.custom-checkbox .custom-control-input:checked~.custom-control-indicator {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E")
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator {
    background-color: #ff5c57;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
    -webkit-box-shadow: none;
    box-shadow: none
}

.custom-radio .custom-control-indicator {
    border-radius: 50%
}

.custom-radio .custom-control-input:checked~.custom-control-indicator {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")
}

.custom-controls-stacked {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column
}

.custom-file,.custom-select {
    display: inline-block;
    max-width: 100%
}

.custom-controls-stacked .custom-control {
    margin-bottom: .25rem
}

.custom-select {
    height: calc(2.25rem + 2px);
    padding: .375rem 1.75rem .375rem .75rem;
    line-height: 1.5;
    color: #495057;
    background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") right .75rem center no-repeat #fff;
    background-size: 8px 10px;
    border: 1px solid #ced4da;
    border-radius: 2px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.custom-select:focus {
    border-color: #ffd7d6;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(255,215,214,.5);
    box-shadow: inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(255,215,214,.5)
}

.custom-select:focus::-ms-value {
    color: #495057;
    background-color: #fff
}

.custom-select[multiple] {
    height: auto;
    background-image: none
}

.custom-select:disabled {
    color: #868e96;
    background-color: #e9ecef
}

.custom-select::-ms-expand {
    opacity: 0
}

.custom-select-sm {
    height: calc(1.8125rem + 2px);
    padding-top: .375rem;
    padding-bottom: .375rem;
    font-size: 75%
}

.custom-file {
    position: relative;
    height: calc(2.25rem + 2px);
    margin-bottom: 0
}

.custom-file-control,.custom-file-control::before {
    position: absolute;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    line-height: 1.5;
    color: #495057
}

.custom-file-input {
    max-width: 100%;
    height: calc(2.25rem + 2px);
    margin: 0;
    opacity: 0
}

.custom-file-input:focus~.custom-file-control {
    -webkit-box-shadow: 0 0 0 .075rem #fff,0 0 0 .2rem #ff5c57;
    box-shadow: 0 0 0 .075rem #fff,0 0 0 .2rem #ff5c57
}

.custom-file-control {
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;
    user-select: none;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
}

.custom-file-control:lang(en):empty::after {
    content: "Choose file..."
}

.custom-file-control::before {
    top: -1px;
    right: -1px;
    bottom: -1px;
    z-index: 6;
    display: block;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0 2px 2px 0
}

.nav,.navbar {
    display: -webkit-box;
    display: -ms-flexbox;
    -ms-flex-wrap: wrap
}

.custom-file-control:lang(en)::before {
    content: "Browse"
}

.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0
}

.nav-link,.navbar {
    padding: .5rem 1rem
}

.nav-link {
    display: block
}

.nav-link:focus,.nav-link:hover {
    text-decoration: none
}

.nav-link.disabled {
    color: #868e96
}

.nav-tabs {
    border-bottom: 1px solid #ddd
}

.nav-tabs .nav-item {
    margin-bottom: -1px
}

.nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px
}

.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover {
    border-color: #e9ecef #e9ecef #ddd
}

.nav-tabs .nav-link.disabled {
    color: #868e96;
    background-color: transparent;
    border-color: transparent
}

.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active {
    color: #495057;
    background-color: #e9ebee;
    border-color: #ddd #ddd #e9ebee
}

.nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.nav-pills .nav-link {
    border-radius: 2px
}

.nav-pills .nav-link.active,.nav-pills .show>.nav-link {
    color: #fff;
    background-color: #ff5c57
}

.nav-fill .nav-item {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center
}

.nav-justified .nav-item {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center
}

.tab-content>.tab-pane {
    display: none
}

.tab-content>.active {
    display: block
}

.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.navbar>.container,.navbar>.container-fluid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit
}

.card,.navbar-nav {
    display: -webkit-box;
    display: -ms-flexbox
}

.navbar-brand:focus,.navbar-brand:hover {
    text-decoration: none
}

.navbar-nav {
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0
}

.navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0
}

.navbar-nav .dropdown-menu {
    position: static;
    float: none
}

.navbar-text {
    display: inline-block;
    padding-top: .5rem;
    padding-bottom: .5rem
}

.navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background: 0 0;
    border: 1px solid transparent;
    border-radius: 2px
}

.navbar-toggler:focus,.navbar-toggler:hover {
    text-decoration: none
}

.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    content: "";
    background: center center no-repeat;
    background-size: 100% 100%
}

@media (max-width: 575px) {
    .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media (min-width: 576px) {
    .navbar-expand-sm,.navbar-expand-sm .navbar-nav {
        -webkit-box-orient:horizontal;
        -webkit-box-direction: normal
    }

    .navbar-expand-sm {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }

    .navbar-expand-sm .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-sm .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    .navbar-expand-sm .navbar-collapse {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .navbar-expand-sm .navbar-toggler {
        display: none
    }

    .navbar-expand-sm .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

@media (max-width: 767px) {
    .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media (min-width: 768px) {
    .navbar-expand-md,.navbar-expand-md .navbar-nav {
        -webkit-box-orient:horizontal;
        -webkit-box-direction: normal
    }

    .navbar-expand-md {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }

    .navbar-expand-md .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }

    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-md .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-md .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    .navbar-expand-md .navbar-collapse {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .navbar-expand-md .navbar-toggler {
        display: none
    }

    .navbar-expand-md .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

@media (max-width: 991px) {
    .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media (min-width: 992px) {
    .navbar-expand-lg,.navbar-expand-lg .navbar-nav {
        -webkit-box-orient:horizontal;
        -webkit-box-direction: normal
    }

    .navbar-expand-lg {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }

    .navbar-expand-lg .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    .navbar-expand-lg .navbar-collapse {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .navbar-expand-lg .navbar-toggler {
        display: none
    }

    .navbar-expand-lg .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

@media (max-width: 1199px) {
    .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media (min-width: 1200px) {
    .navbar-expand-xl,.navbar-expand-xl .navbar-nav {
        -webkit-box-orient:horizontal;
        -webkit-box-direction: normal
    }

    .navbar-expand-xl {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }

    .navbar-expand-xl .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-xl .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    .navbar-expand-xl .navbar-collapse {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .navbar-expand-xl .navbar-toggler {
        display: none
    }

    .navbar-expand-xl .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

@media (max-width: 1399px) {
    .navbar-expand-ul>.container,.navbar-expand-ul>.container-fluid {
        padding-right:0;
        padding-left: 0
    }
}

@media (min-width: 1400px) {
    .navbar-expand-ul,.navbar-expand-ul .navbar-nav {
        -webkit-box-orient:horizontal;
        -webkit-box-direction: normal
    }

    .navbar-expand-ul {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }

    .navbar-expand-ul .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }

    .navbar-expand-ul .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-ul .navbar-nav .dropdown-menu-right {
        right: 0;
        left: auto
    }

    .navbar-expand-ul .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem
    }

    .navbar-expand-ul>.container,.navbar-expand-ul>.container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    .navbar-expand-ul .navbar-collapse {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .navbar-expand-ul .navbar-toggler {
        display: none
    }

    .navbar-expand-ul .dropup .dropdown-menu {
        top: auto;
        bottom: 100%
    }
}

.navbar-expand {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.navbar-expand>.container,.navbar-expand>.container-fluid {
    padding-right: 0;
    padding-left: 0
}

.navbar-expand .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.card,.card-deck {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal
}

.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute
}

.alert,.btn .badge,.card,.page-link {
    position: relative
}

.navbar-expand .navbar-nav .dropdown-menu-right {
    right: 0;
    left: auto
}

.navbar-expand .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem
}

.navbar-expand>.container,.navbar-expand>.container-fluid {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
}

.navbar-expand .navbar-collapse {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto
}

.navbar-expand .navbar-toggler {
    display: none
}

.navbar-expand .dropup .dropdown-menu {
    top: auto;
    bottom: 100%
}

.modal,.modal-backdrop,.popover.bs-popover-auto[x-placement^=top] .arrow,.popover.bs-popover-top .arrow,.tooltip.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.bs-tooltip-top .arrow {
    bottom: 0
}

.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover {
    color: rgba(0,0,0,.9)
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(0,0,0,.5)
}

.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0,0,0,.7)
}

.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0,0,0,.3)
}

.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link {
    color: rgba(0,0,0,.9)
}

.navbar-light .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.1)
}

.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

.navbar-light .navbar-text {
    color: rgba(0,0,0,.5)
}

.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover {
    color: rgba(0,0,0,.9)
}

.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-nav .nav-link {
    color: #fff
}

.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255,255,255,.75)
}

.navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255,255,255,.25)
}

.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-text,.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover {
    color: #fff
}

.navbar-dark .navbar-toggler {
    color: #fff;
    border-color: rgba(255,255,255,.1)
}

.navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

.card {
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 2px
}

.card>hr {
    margin-right: 0
}

.card>.list-group:first-child .list-group-item:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px
}

.card>.list-group:last-child .list-group-item:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px
}

.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem
}

.card-footer,.card-header {
    padding: .75rem 1rem;
    background-color: rgba(0,0,0,.03)
}

.card-title {
    margin-bottom: .75rem
}

.card-header,.card-subtitle,.card-text:last-child {
    margin-bottom: 0
}

.card-subtitle {
    margin-top: -.375rem
}

.card-link:hover {
    text-decoration: none
}

.card-link+.card-link {
    margin-left: 1rem
}

.card-header-pills,.card-header-tabs {
    margin-right: -.5rem;
    margin-left: -.5rem
}

.card-header {
    border-bottom: 1px solid rgba(0,0,0,.125)
}

.card-header:first-child {
    border-radius: calc(2px - 1px) calc(2px - 1px) 0 0
}

.card-header+.list-group .list-group-item:first-child {
    border-top: 0
}

.card-footer {
    border-top: 1px solid rgba(0,0,0,.125)
}

.card-footer:last-child {
    border-radius: 0 0 calc(2px - 1px) calc(2px - 1px)
}

.card-header-tabs {
    margin-bottom: -.75rem;
    border-bottom: 0
}

.card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem
}

.card-img {
    width: 100%;
    border-radius: calc(2px - 1px)
}

.card-img-top {
    width: 100%;
    border-top-left-radius: calc(2px - 1px);
    border-top-right-radius: calc(2px - 1px)
}

.card-img-bottom {
    width: 100%;
    border-bottom-right-radius: calc(2px - 1px);
    border-bottom-left-radius: calc(2px - 1px)
}

.card-deck {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column
}

.card-deck .card {
    margin-bottom: 15px
}

@media (min-width: 576px) {
    .card-deck,.card-deck .card {
        -webkit-box-direction:normal
    }

    .card-deck {
        -webkit-box-orient: horizontal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        margin-right: -15px;
        margin-left: -15px
    }

    .card-deck .card {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        -webkit-box-orient: vertical;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px
    }
}

.card-group,.list-group {
    -ms-flex-direction: column
}

.card-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column
}

.card-group .card {
    margin-bottom: 15px
}

@media (min-width: 576px) {
    .card-group {
        -webkit-box-orient:horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap
    }

    .card-group .card {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        margin-bottom: 0
    }

    .card-group .card+.card {
        margin-left: 0;
        border-left: 0
    }

    .card-group .card:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .card-group .card:first-child .card-img-top {
        border-top-right-radius: 0
    }

    .card-group .card:first-child .card-img-bottom {
        border-bottom-right-radius: 0
    }

    .card-group .card:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0
    }

    .card-group .card:last-child .card-img-top {
        border-top-left-radius: 0
    }

    .card-group .card:last-child .card-img-bottom {
        border-bottom-left-radius: 0
    }

    .card-group .card:only-child {
        border-radius: 2px
    }

    .card-group .card:only-child .card-img-top {
        border-top-left-radius: 2px;
        border-top-right-radius: 2px
    }

    .card-group .card:only-child .card-img-bottom {
        border-bottom-right-radius: 2px;
        border-bottom-left-radius: 2px
    }

    .card-group .card:not(:first-child):not(:last-child):not(:only-child),.card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top {
        border-radius: 0
    }

    .card-columns {
        -webkit-column-count: 3;
        column-count: 3;
        -webkit-column-gap: 1.25rem;
        column-gap: 1.25rem
    }

    .card-columns .card {
        display: inline-block;
        width: 100%
    }
}

.list-group,.modal-content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal
}

.breadcrumb,.pagination {
    list-style: none;
    border-radius: 2px
}

.card-columns .card {
    margin-bottom: .75rem
}

.breadcrumb {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    background-color: #e9ecef
}

.breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    padding-left: .5rem;
    color: #868e96;
    content: "/"
}

.pagination,.progress {
    display: -webkit-box;
    display: -ms-flexbox
}

.breadcrumb-item+.breadcrumb-item:hover::before {
    text-decoration: none
}

.breadcrumb-item.active {
    color: #868e96
}

.pagination {
    display: flex;
    padding-left: 0
}

.page-link,.popover-body,.popover-header {
    padding: .5rem .75rem
}

.page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.page-item:last-child .page-link {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.page-item.active .page-link {
    z-index: 2;
    color: #fff;
    background-color: #ff5c57;
    border-color: #ff5c57
}

.page-item.disabled .page-link {
    color: #868e96;
    background-color: #fff;
    border-color: #ddd
}

.page-link {
    display: block;
    margin-left: -1px;
    line-height: 1.25;
    color: #ff5c57;
    background-color: #fff;
    border: 1px solid #ddd
}

.pagination-lg .page-item:first-child .page-link,.pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.pagination-lg .page-item:last-child .page-link,.pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.page-link:focus,.page-link:hover {
    color: #ff130a;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #ddd
}

.pagination-lg .page-link {
    padding: .75rem 1.5rem;
    font-size: 1.25rem;
    line-height: 1.5
}

.pagination-sm .page-link {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5
}

.badge,.close {
    font-weight: 700;
    line-height: 1
}

.badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    text-align: center;
    vertical-align: baseline;
    border-radius: 2px
}

.badge:empty {
    display: none
}

.btn .badge {
    top: -1px
}

.badge-pill {
    padding-right: .6em;
    padding-left: .6em;
    border-radius: 10rem
}

.badge-primary {
    color: #fff;
    background-color: #ff5c57
}

.badge-primary[href]:focus,.badge-primary[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #ff2b24
}

.badge-secondary {
    color: #fff;
    background-color: #868e96
}

.badge-secondary[href]:focus,.badge-secondary[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #6c757d
}

.badge-success {
    color: #fff;
    background-color: #28a745
}

.badge-success[href]:focus,.badge-success[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #1e7e34
}

.badge-info {
    color: #fff;
    background-color: #17a2b8
}

.badge-info[href]:focus,.badge-info[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #117a8b
}

.badge-warning {
    color: #111;
    background-color: #ffc107
}

.badge-warning[href]:focus,.badge-warning[href]:hover {
    color: #111;
    text-decoration: none;
    background-color: #d39e00
}

.badge-danger {
    color: #fff;
    background-color: #dc3545
}

.badge-danger[href]:focus,.badge-danger[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #bd2130
}

.badge-light {
    color: #111;
    background-color: #f8f9fa
}

.badge-light[href]:focus,.badge-light[href]:hover {
    color: #111;
    text-decoration: none;
    background-color: #dae0e5
}

.badge-dark {
    color: #fff;
    background-color: #343a40
}

.badge-dark[href]:focus,.badge-dark[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #1d2124
}

.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: 2px
}

@media (min-width: 576px) {
    .jumbotron {
        padding:4rem 2rem
    }
}

.jumbotron-fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0
}

.alert {
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 2px
}

.alert-heading {
    color: inherit
}

.alert-link {
    font-weight: 700
}

.alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: .75rem 1.25rem;
    color: inherit
}

.alert-primary {
    color: #85302d;
    background-color: #ffdedd;
    border-color: #ffd1d0
}

.alert-primary hr {
    border-top-color: #ffb8b7
}

.alert-primary .alert-link {
    color: #5f2220
}

.alert-secondary {
    color: #464a4e;
    background-color: #e7e8ea;
    border-color: #dddfe2
}

.alert-secondary hr {
    border-top-color: #cfd2d6
}

.alert-secondary .alert-link {
    color: #2e3133
}

.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb
}

.alert-success hr {
    border-top-color: #b1dfbb
}

.alert-success .alert-link {
    color: #0b2e13
}

.alert-info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb
}

.alert-info hr {
    border-top-color: #abdde5
}

.alert-info .alert-link {
    color: #062c33
}

.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba
}

.alert-warning hr {
    border-top-color: #ffe8a1
}

.alert-warning .alert-link {
    color: #533f03
}

.alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb
}

.alert-danger hr {
    border-top-color: #f1b0b7
}

.alert-danger .alert-link {
    color: #491217
}

.alert-light {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe
}

.alert-light hr {
    border-top-color: #ececf6
}

.alert-light .alert-link {
    color: #686868
}

.alert-dark {
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca
}

.alert-dark hr {
    border-top-color: #b9bbbe
}

.alert-dark .alert-link {
    color: #040505
}

@-webkit-keyframes progress-bar-stripes {
    from {
        background-position: 1rem 0
    }

    to {
        background-position: 0 0
    }
}

@keyframes progress-bar-stripes {
    from {
        background-position: 1rem 0
    }

    to {
        background-position: 0 0
    }
}

.progress {
    display: flex;
    height: 1rem;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: 2px
}

.media,.progress-bar {
    display: -webkit-box;
    display: -ms-flexbox
}

.progress-bar {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    background-color: #ff5c57
}

.progress-bar-striped {
    background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 1rem 1rem
}

.progress-bar-animated {
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite
}

.media {
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.media-body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.list-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0
}

.list-group-item-action {
    width: 100%;
    color: #212529;
    text-align: inherit
}

.list-group-item-action:focus,.list-group-item-action:hover {
    color: #212529;
    text-decoration: none;
    background-color: #f8f9fa
}

.list-group-item-action:active {
    color: #212529;
    background-color: #e9ecef
}

.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125)
}

.list-group-item:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px
}

.list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px
}

.list-group-item:focus,.list-group-item:hover {
    text-decoration: none
}

.list-group-item.disabled,.list-group-item:disabled {
    color: #868e96;
    background-color: #fff
}

.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ff5c57;
    border-color: #ff5c57
}

.list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0
}

.list-group-flush:first-child .list-group-item:first-child {
    border-top: 0
}

.list-group-flush:last-child .list-group-item:last-child {
    border-bottom: 0
}

.list-group-item-primary {
    color: #85302d;
    background-color: #ffd1d0
}

a.list-group-item-primary,button.list-group-item-primary {
    color: #85302d
}

a.list-group-item-primary:focus,a.list-group-item-primary:hover,button.list-group-item-primary:focus,button.list-group-item-primary:hover {
    color: #85302d;
    background-color: #ffb8b7
}

a.list-group-item-primary.active,button.list-group-item-primary.active {
    color: #fff;
    background-color: #85302d;
    border-color: #85302d
}

.list-group-item-secondary {
    color: #464a4e;
    background-color: #dddfe2
}

a.list-group-item-secondary,button.list-group-item-secondary {
    color: #464a4e
}

a.list-group-item-secondary:focus,a.list-group-item-secondary:hover,button.list-group-item-secondary:focus,button.list-group-item-secondary:hover {
    color: #464a4e;
    background-color: #cfd2d6
}

a.list-group-item-secondary.active,button.list-group-item-secondary.active {
    color: #fff;
    background-color: #464a4e;
    border-color: #464a4e
}

.list-group-item-success {
    color: #155724;
    background-color: #c3e6cb
}

a.list-group-item-success,button.list-group-item-success {
    color: #155724
}

a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover {
    color: #155724;
    background-color: #b1dfbb
}

a.list-group-item-success.active,button.list-group-item-success.active {
    color: #fff;
    background-color: #155724;
    border-color: #155724
}

.list-group-item-info {
    color: #0c5460;
    background-color: #bee5eb
}

a.list-group-item-info,button.list-group-item-info {
    color: #0c5460
}

a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover {
    color: #0c5460;
    background-color: #abdde5
}

a.list-group-item-info.active,button.list-group-item-info.active {
    color: #fff;
    background-color: #0c5460;
    border-color: #0c5460
}

.list-group-item-warning {
    color: #856404;
    background-color: #ffeeba
}

a.list-group-item-warning,button.list-group-item-warning {
    color: #856404
}

a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover {
    color: #856404;
    background-color: #ffe8a1
}

a.list-group-item-warning.active,button.list-group-item-warning.active {
    color: #fff;
    background-color: #856404;
    border-color: #856404
}

.list-group-item-danger {
    color: #721c24;
    background-color: #f5c6cb
}

a.list-group-item-danger,button.list-group-item-danger {
    color: #721c24
}

a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover {
    color: #721c24;
    background-color: #f1b0b7
}

a.list-group-item-danger.active,button.list-group-item-danger.active {
    color: #fff;
    background-color: #721c24;
    border-color: #721c24
}

.list-group-item-light {
    color: #818182;
    background-color: #fdfdfe
}

a.list-group-item-light,button.list-group-item-light {
    color: #818182
}

a.list-group-item-light:focus,a.list-group-item-light:hover,button.list-group-item-light:focus,button.list-group-item-light:hover {
    color: #818182;
    background-color: #ececf6
}

a.list-group-item-light.active,button.list-group-item-light.active {
    color: #fff;
    background-color: #818182;
    border-color: #818182
}

.list-group-item-dark {
    color: #1b1e21;
    background-color: #c6c8ca
}

a.list-group-item-dark,button.list-group-item-dark {
    color: #1b1e21
}

a.list-group-item-dark:focus,a.list-group-item-dark:hover,button.list-group-item-dark:focus,button.list-group-item-dark:hover {
    color: #1b1e21;
    background-color: #b9bbbe
}

a.list-group-item-dark.active,button.list-group-item-dark.active {
    color: #fff;
    background-color: #1b1e21;
    border-color: #1b1e21
}

.close {
    float: right;
    font-size: 1.5rem;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5
}

.popover,.tooltip {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-style: normal;
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    text-decoration: none;
    word-wrap: break-word
}

.modal-title,.popover,.tooltip {
    line-height: 1.5
}

.popover,.text-hide,.tooltip {
    text-shadow: none
}

.close:focus,.close:hover {
    color: #000;
    text-decoration: none;
    opacity: .75
}

button.close {
    padding: 0;
    background: 0 0;
    border: 0;
    -webkit-appearance: none
}

.modal-content,.popover {
    background-clip: padding-box
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0
}

.modal-content,.modal-header {
    display: -webkit-box;
    display: -ms-flexbox
}

.modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform .3s ease-out;
    -o-transition: transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    -webkit-transform: translate(0,-25%);
    -ms-transform: translate(0,-25%);
    transform: translate(0,-25%)
}

.modal.show .modal-dialog {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0)
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px
}

.modal-content {
    position: relative;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    pointer-events: auto;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 9px rgba(0,0,0,.5);
    box-shadow: 0 3px 9px rgba(0,0,0,.5);
    outline: 0
}

.flex-column,.flex-row {
    -webkit-box-direction: normal!important
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1040;
    background-color: #000
}

.modal-backdrop.fade {
    opacity: 0
}

.modal-backdrop.show {
    opacity: .5
}

.modal-header {
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px
}

.modal-header .close {
    padding: 15px;
    margin: -15px -15px -15px auto
}

.modal-title {
    margin-bottom: 0
}

.modal-body {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 15px
}

.modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 15px;
    border-top: 1px solid #e9ecef
}

.popover,.popover .arrow,.popover .arrow::after,.popover .arrow::before,.tooltip,.tooltip .arrow {
    position: absolute;
    display: block
}

.modal-footer>:not(:first-child) {
    margin-left: .25rem
}

.modal-footer>:not(:last-child) {
    margin-right: .25rem
}

.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}

.popover.bs-popover-auto[x-placement^=bottom] .arrow,.popover.bs-popover-bottom .arrow,.tooltip.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.bs-tooltip-bottom .arrow {
    top: 0
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width:500px;
        margin: 30px auto
    }

    .modal-content {
        -webkit-box-shadow: 0 5px 15px rgba(0,0,0,.5);
        box-shadow: 0 5px 15px rgba(0,0,0,.5)
    }

    .modal-sm {
        max-width: 300px
    }
}

@media (min-width: 992px) {
    .modal-lg {
        max-width:800px
    }
}

.tooltip {
    z-index: 1070;
    margin: 0;
    text-align: left;
    text-align: start;
    opacity: 0
}

.tooltip.show {
    opacity: .8
}

.tooltip .arrow {
    width: 5px;
    height: 5px
}

.tooltip .arrow::before {
    position: absolute;
    border-color: transparent;
    border-style: solid
}

.tooltip.bs-tooltip-auto[x-placement^=top],.tooltip.bs-tooltip-top {
    padding: 5px 0
}

.tooltip.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.bs-tooltip-top .arrow::before {
    margin-left: -3px;
    content: "";
    border-width: 5px 5px 0;
    border-top-color: #123
}

.tooltip.bs-tooltip-auto[x-placement^=right],.tooltip.bs-tooltip-right {
    padding: 0 5px
}

.tooltip.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.bs-tooltip-right .arrow {
    left: 0
}

.tooltip.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.bs-tooltip-right .arrow::before {
    margin-top: -3px;
    content: "";
    border-width: 5px 5px 5px 0;
    border-right-color: #123
}

.tooltip.bs-tooltip-auto[x-placement^=bottom],.tooltip.bs-tooltip-bottom {
    padding: 5px 0
}

.tooltip.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.bs-tooltip-bottom .arrow::before {
    margin-left: -3px;
    content: "";
    border-width: 0 5px 5px;
    border-bottom-color: #123
}

.tooltip.bs-tooltip-auto[x-placement^=left],.tooltip.bs-tooltip-left {
    padding: 0 5px
}

.tooltip.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.bs-tooltip-left .arrow {
    right: 0
}

.tooltip.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.bs-tooltip-left .arrow::before {
    right: 0;
    margin-top: -3px;
    content: "";
    border-width: 5px 0 5px 5px;
    border-left-color: #123
}

.tooltip-inner {
    max-width: 220px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    background-color: #123;
    border-radius: 2px
}

.popover {
    top: 0;
    left: 0;
    z-index: 1060;
    max-width: 480px;
    text-align: left;
    text-align: start;
    font-size: .875rem;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 2px;
    -webkit-box-shadow: 0 .25rem .5rem rgba(0,0,0,.2);
    box-shadow: 0 .25rem .5rem rgba(0,0,0,.2);
    min-width: 280px
}

.popover .arrow {
    width: .8rem;
    height: .4rem
}

.popover .arrow::after,.popover .arrow::before {
    border-color: transparent;
    border-style: solid;
    content: "";
    border-width: .8rem
}

.popover.bs-popover-auto[x-placement^=top],.popover.bs-popover-top {
    margin-bottom: .8rem
}

.popover.bs-popover-auto[x-placement^=top] .arrow::after,.popover.bs-popover-auto[x-placement^=top] .arrow::before,.popover.bs-popover-top .arrow::after,.popover.bs-popover-top .arrow::before {
    border-bottom-width: 0
}

.popover.bs-popover-auto[x-placement^=top] .arrow::before,.popover.bs-popover-top .arrow::before {
    bottom: -.8rem;
    margin-left: -.8rem;
    border-top-color: rgba(0,0,0,.25)
}

.popover.bs-popover-auto[x-placement^=top] .arrow::after,.popover.bs-popover-top .arrow::after {
    bottom: calc((.8rem - 1px) * -1);
    margin-left: -.8rem;
    border-top-color: #fff
}

.popover.bs-popover-auto[x-placement^=right],.popover.bs-popover-right {
    margin-left: .8rem
}

.popover.bs-popover-auto[x-placement^=right] .arrow,.popover.bs-popover-right .arrow {
    left: 0
}

.popover.bs-popover-auto[x-placement^=right] .arrow::after,.popover.bs-popover-auto[x-placement^=right] .arrow::before,.popover.bs-popover-right .arrow::after,.popover.bs-popover-right .arrow::before {
    margin-top: -.8rem;
    border-left-width: 0
}

.popover.bs-popover-auto[x-placement^=right] .arrow::before,.popover.bs-popover-right .arrow::before {
    left: -.8rem;
    border-right-color: rgba(0,0,0,.25)
}

.popover.bs-popover-auto[x-placement^=right] .arrow::after,.popover.bs-popover-right .arrow::after {
    left: calc((.8rem - 1px) * -1);
    border-right-color: #fff
}

.popover.bs-popover-auto[x-placement^=bottom],.popover.bs-popover-bottom {
    margin-top: .8rem
}

.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,.popover.bs-popover-bottom .arrow::after,.popover.bs-popover-bottom .arrow::before {
    margin-left: -.8rem;
    border-top-width: 0
}

.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,.popover.bs-popover-bottom .arrow::before {
    top: -.8rem;
    border-bottom-color: rgba(0,0,0,.25)
}

.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,.popover.bs-popover-bottom .arrow::after {
    top: calc((.8rem - 1px) * -1);
    border-bottom-color: #fff
}

.popover.bs-popover-auto[x-placement^=bottom] .popover-header::before,.popover.bs-popover-bottom .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 20px;
    margin-left: -10px;
    content: "";
    border-bottom: 1px solid #f7f7f7
}

.popover.bs-popover-auto[x-placement^=left],.popover.bs-popover-left {
    margin-right: .8rem
}

.popover.bs-popover-auto[x-placement^=left] .arrow,.popover.bs-popover-left .arrow {
    right: 0
}

.popover.bs-popover-auto[x-placement^=left] .arrow::after,.popover.bs-popover-auto[x-placement^=left] .arrow::before,.popover.bs-popover-left .arrow::after,.popover.bs-popover-left .arrow::before {
    margin-top: -.8rem;
    border-right-width: 0
}

.popover.bs-popover-auto[x-placement^=left] .arrow::before,.popover.bs-popover-left .arrow::before {
    right: -.8rem;
    border-left-color: rgba(0,0,0,.25)
}

.popover.bs-popover-auto[x-placement^=left] .arrow::after,.popover.bs-popover-left .arrow::after {
    right: calc((.8rem - 1px) * -1);
    border-left-color: #fff
}

.popover-header {
    margin-bottom: 0;
    font-size: 1rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(2px - 1px);
    border-top-right-radius: calc(2px - 1px)
}

.popover-header:empty {
    display: none
}

.popover-body {
    color: #212529
}

.align-baseline {
    vertical-align: baseline!important
}

.align-top {
    vertical-align: top!important
}

.align-middle {
    vertical-align: middle!important
}

.align-bottom {
    vertical-align: bottom!important
}

.align-text-bottom {
    vertical-align: text-bottom!important
}

.align-text-top {
    vertical-align: text-top!important
}

.bg-primary {
    background-color: #ff5c57!important
}

a.bg-primary:focus,a.bg-primary:hover {
    background-color: #ff2b24!important
}

.bg-secondary {
    background-color: #868e96!important
}

a.bg-secondary:focus,a.bg-secondary:hover {
    background-color: #6c757d!important
}

.bg-success {
    background-color: #28a745!important
}

a.bg-success:focus,a.bg-success:hover {
    background-color: #1e7e34!important
}

.bg-info {
    background-color: #17a2b8!important
}

a.bg-info:focus,a.bg-info:hover {
    background-color: #117a8b!important
}

.bg-warning {
    background-color: #ffc107!important
}

a.bg-warning:focus,a.bg-warning:hover {
    background-color: #d39e00!important
}

.bg-danger {
    background-color: #dc3545!important
}

a.bg-danger:focus,a.bg-danger:hover {
    background-color: #bd2130!important
}

.bg-light {
    background-color: #f8f9fa!important
}

a.bg-light:focus,a.bg-light:hover {
    background-color: #dae0e5!important
}

.bg-dark {
    background-color: #343a40!important
}

a.bg-dark:focus,a.bg-dark:hover {
    background-color: #1d2124!important
}

.bg-white {
    background-color: #fff!important
}

.bg-transparent {
    background-color: transparent!important
}

.border {
    border: 1px solid #e9ecef!important
}

.border-0 {
    border: 0!important
}

.rounded-right,.rounded-top {
    border-top-right-radius: 2px!important
}

.rounded-bottom,.rounded-right {
    border-bottom-right-radius: 2px!important
}

.rounded-left,.rounded-top {
    border-top-left-radius: 2px!important
}

.rounded-bottom,.rounded-left {
    border-bottom-left-radius: 2px!important
}

.border-top-0 {
    border-top: 0!important
}

.border-right-0 {
    border-right: 0!important
}

.border-bottom-0 {
    border-bottom: 0!important
}

.border-left-0 {
    border-left: 0!important
}

.border-primary {
    border-color: #ff5c57!important
}

.border-secondary {
    border-color: #868e96!important
}

.border-success {
    border-color: #28a745!important
}

.border-info {
    border-color: #17a2b8!important
}

.border-warning {
    border-color: #ffc107!important
}

.border-danger {
    border-color: #dc3545!important
}

.border-light {
    border-color: #f8f9fa!important
}

.border-dark {
    border-color: #343a40!important
}

.border-white {
    border-color: #fff!important
}

.rounded {
    border-radius: 2px!important
}

.rounded-circle {
    border-radius: 50%!important
}

.rounded-0 {
    border-radius: 0!important
}

.clearfix::after {
    display: block;
    clear: both;
    content: ""
}

.d-none {
    display: none!important
}

.d-inline {
    display: inline!important
}

.d-inline-block {
    display: inline-block!important
}

.d-block {
    display: block!important
}

.d-table {
    display: table!important
}

.d-table-row {
    display: table-row!important
}

.d-table-cell {
    display: table-cell!important
}

.d-flex {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important
}

.d-inline-flex {
    display: -webkit-inline-box!important;
    display: -ms-inline-flexbox!important;
    display: inline-flex!important
}

@media (min-width: 576px) {
    .d-sm-none {
        display:none!important
    }

    .d-sm-inline {
        display: inline!important
    }

    .d-sm-inline-block {
        display: inline-block!important
    }

    .d-sm-block {
        display: block!important
    }

    .d-sm-table {
        display: table!important
    }

    .d-sm-table-row {
        display: table-row!important
    }

    .d-sm-table-cell {
        display: table-cell!important
    }

    .d-sm-flex {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important
    }

    .d-sm-inline-flex {
        display: -webkit-inline-box!important;
        display: -ms-inline-flexbox!important;
        display: inline-flex!important
    }
}

@media (min-width: 768px) {
    .d-md-none {
        display:none!important
    }

    .d-md-inline {
        display: inline!important
    }

    .d-md-inline-block {
        display: inline-block!important
    }

    .d-md-block {
        display: block!important
    }

    .d-md-table {
        display: table!important
    }

    .d-md-table-row {
        display: table-row!important
    }

    .d-md-table-cell {
        display: table-cell!important
    }

    .d-md-flex {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important
    }

    .d-md-inline-flex {
        display: -webkit-inline-box!important;
        display: -ms-inline-flexbox!important;
        display: inline-flex!important
    }
}

@media (min-width: 992px) {
    .d-lg-none {
        display:none!important
    }

    .d-lg-inline {
        display: inline!important
    }

    .d-lg-inline-block {
        display: inline-block!important
    }

    .d-lg-block {
        display: block!important
    }

    .d-lg-table {
        display: table!important
    }

    .d-lg-table-row {
        display: table-row!important
    }

    .d-lg-table-cell {
        display: table-cell!important
    }

    .d-lg-flex {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important
    }

    .d-lg-inline-flex {
        display: -webkit-inline-box!important;
        display: -ms-inline-flexbox!important;
        display: inline-flex!important
    }
}

@media (min-width: 1200px) {
    .d-xl-none {
        display:none!important
    }

    .d-xl-inline {
        display: inline!important
    }

    .d-xl-inline-block {
        display: inline-block!important
    }

    .d-xl-block {
        display: block!important
    }

    .d-xl-table {
        display: table!important
    }

    .d-xl-table-row {
        display: table-row!important
    }

    .d-xl-table-cell {
        display: table-cell!important
    }

    .d-xl-flex {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important
    }

    .d-xl-inline-flex {
        display: -webkit-inline-box!important;
        display: -ms-inline-flexbox!important;
        display: inline-flex!important
    }
}

@media (min-width: 1400px) {
    .d-ul-none {
        display:none!important
    }

    .d-ul-inline {
        display: inline!important
    }

    .d-ul-inline-block {
        display: inline-block!important
    }

    .d-ul-block {
        display: block!important
    }

    .d-ul-table {
        display: table!important
    }

    .d-ul-table-row {
        display: table-row!important
    }

    .d-ul-table-cell {
        display: table-cell!important
    }

    .d-ul-flex {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important
    }

    .d-ul-inline-flex {
        display: -webkit-inline-box!important;
        display: -ms-inline-flexbox!important;
        display: inline-flex!important
    }
}

.d-print-block {
    display: none!important
}

@media print {
    .d-print-block {
        display: block!important
    }
}

.d-print-inline {
    display: none!important
}

@media print {
    .d-print-inline {
        display: inline!important
    }
}

.d-print-inline-block {
    display: none!important
}

@media print {
    .d-print-inline-block {
        display: inline-block!important
    }

    .d-print-none {
        display: none!important
    }
}

.embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden
}

.embed-responsive::before {
    display: block;
    content: ""
}

.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0
}

.embed-responsive-21by9::before {
    padding-top: 42.85714%
}

.embed-responsive-16by9::before {
    padding-top: 56.25%
}

.embed-responsive-4by3::before {
    padding-top: 75%
}

.embed-responsive-1by1::before {
    padding-top: 100%
}

.flex-row {
    -webkit-box-orient: horizontal!important;
    -ms-flex-direction: row!important;
    flex-direction: row!important
}

.flex-column {
    -webkit-box-orient: vertical!important;
    -ms-flex-direction: column!important;
    flex-direction: column!important
}

.flex-column-reverse,.flex-row-reverse {
    -webkit-box-direction: reverse!important
}

.flex-row-reverse {
    -webkit-box-orient: horizontal!important;
    -ms-flex-direction: row-reverse!important;
    flex-direction: row-reverse!important
}

.flex-column-reverse {
    -webkit-box-orient: vertical!important;
    -ms-flex-direction: column-reverse!important;
    flex-direction: column-reverse!important
}

.flex-wrap {
    -ms-flex-wrap: wrap!important;
    flex-wrap: wrap!important
}

.flex-nowrap {
    -ms-flex-wrap: nowrap!important;
    flex-wrap: nowrap!important
}

.flex-wrap-reverse {
    -ms-flex-wrap: wrap-reverse!important;
    flex-wrap: wrap-reverse!important
}

.justify-content-start {
    -webkit-box-pack: start!important;
    -ms-flex-pack: start!important;
    justify-content: flex-start!important
}

.justify-content-end {
    -webkit-box-pack: end!important;
    -ms-flex-pack: end!important;
    justify-content: flex-end!important
}

.justify-content-center {
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important
}

.justify-content-between {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important
}

.justify-content-around {
    -ms-flex-pack: distribute!important;
    justify-content: space-around!important
}

.align-items-start {
    -webkit-box-align: start!important;
    -ms-flex-align: start!important;
    align-items: flex-start!important
}

.align-items-end {
    -webkit-box-align: end!important;
    -ms-flex-align: end!important;
    align-items: flex-end!important
}

.align-items-center {
    -webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important
}

.align-items-baseline {
    -webkit-box-align: baseline!important;
    -ms-flex-align: baseline!important;
    align-items: baseline!important
}

.align-items-stretch {
    -webkit-box-align: stretch!important;
    -ms-flex-align: stretch!important;
    align-items: stretch!important
}

.align-content-start {
    -ms-flex-line-pack: start!important;
    align-content: flex-start!important
}

.align-content-end {
    -ms-flex-line-pack: end!important;
    align-content: flex-end!important
}

.align-content-center {
    -ms-flex-line-pack: center!important;
    align-content: center!important
}

.align-content-between {
    -ms-flex-line-pack: justify!important;
    align-content: space-between!important
}

.align-content-around {
    -ms-flex-line-pack: distribute!important;
    align-content: space-around!important
}

.align-content-stretch {
    -ms-flex-line-pack: stretch!important;
    align-content: stretch!important
}

.align-self-auto {
    -ms-flex-item-align: auto!important;
    align-self: auto!important
}

.align-self-start {
    -ms-flex-item-align: start!important;
    align-self: flex-start!important
}

.align-self-end {
    -ms-flex-item-align: end!important;
    align-self: flex-end!important
}

.align-self-center {
    -ms-flex-item-align: center!important;
    align-self: center!important
}

.align-self-baseline {
    -ms-flex-item-align: baseline!important;
    align-self: baseline!important
}

.align-self-stretch {
    -ms-flex-item-align: stretch!important;
    align-self: stretch!important
}

@media (min-width: 576px) {
    .flex-sm-column,.flex-sm-row {
        -webkit-box-direction:normal!important
    }

    .flex-sm-row {
        -webkit-box-orient: horizontal!important;
        -ms-flex-direction: row!important;
        flex-direction: row!important
    }

    .flex-sm-column {
        -webkit-box-orient: vertical!important;
        -ms-flex-direction: column!important;
        flex-direction: column!important
    }

    .flex-sm-row-reverse {
        -webkit-box-orient: horizontal!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: row-reverse!important;
        flex-direction: row-reverse!important
    }

    .flex-sm-column-reverse {
        -webkit-box-orient: vertical!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: column-reverse!important;
        flex-direction: column-reverse!important
    }

    .flex-sm-wrap {
        -ms-flex-wrap: wrap!important;
        flex-wrap: wrap!important
    }

    .flex-sm-nowrap {
        -ms-flex-wrap: nowrap!important;
        flex-wrap: nowrap!important
    }

    .flex-sm-wrap-reverse {
        -ms-flex-wrap: wrap-reverse!important;
        flex-wrap: wrap-reverse!important
    }

    .justify-content-sm-start {
        -webkit-box-pack: start!important;
        -ms-flex-pack: start!important;
        justify-content: flex-start!important
    }

    .justify-content-sm-end {
        -webkit-box-pack: end!important;
        -ms-flex-pack: end!important;
        justify-content: flex-end!important
    }

    .justify-content-sm-center {
        -webkit-box-pack: center!important;
        -ms-flex-pack: center!important;
        justify-content: center!important
    }

    .justify-content-sm-between {
        -webkit-box-pack: justify!important;
        -ms-flex-pack: justify!important;
        justify-content: space-between!important
    }

    .justify-content-sm-around {
        -ms-flex-pack: distribute!important;
        justify-content: space-around!important
    }

    .align-items-sm-start {
        -webkit-box-align: start!important;
        -ms-flex-align: start!important;
        align-items: flex-start!important
    }

    .align-items-sm-end {
        -webkit-box-align: end!important;
        -ms-flex-align: end!important;
        align-items: flex-end!important
    }

    .align-items-sm-center {
        -webkit-box-align: center!important;
        -ms-flex-align: center!important;
        align-items: center!important
    }

    .align-items-sm-baseline {
        -webkit-box-align: baseline!important;
        -ms-flex-align: baseline!important;
        align-items: baseline!important
    }

    .align-items-sm-stretch {
        -webkit-box-align: stretch!important;
        -ms-flex-align: stretch!important;
        align-items: stretch!important
    }

    .align-content-sm-start {
        -ms-flex-line-pack: start!important;
        align-content: flex-start!important
    }

    .align-content-sm-end {
        -ms-flex-line-pack: end!important;
        align-content: flex-end!important
    }

    .align-content-sm-center {
        -ms-flex-line-pack: center!important;
        align-content: center!important
    }

    .align-content-sm-between {
        -ms-flex-line-pack: justify!important;
        align-content: space-between!important
    }

    .align-content-sm-around {
        -ms-flex-line-pack: distribute!important;
        align-content: space-around!important
    }

    .align-content-sm-stretch {
        -ms-flex-line-pack: stretch!important;
        align-content: stretch!important
    }

    .align-self-sm-auto {
        -ms-flex-item-align: auto!important;
        align-self: auto!important
    }

    .align-self-sm-start {
        -ms-flex-item-align: start!important;
        align-self: flex-start!important
    }

    .align-self-sm-end {
        -ms-flex-item-align: end!important;
        align-self: flex-end!important
    }

    .align-self-sm-center {
        -ms-flex-item-align: center!important;
        align-self: center!important
    }

    .align-self-sm-baseline {
        -ms-flex-item-align: baseline!important;
        align-self: baseline!important
    }

    .align-self-sm-stretch {
        -ms-flex-item-align: stretch!important;
        align-self: stretch!important
    }
}

@media (min-width: 768px) {
    .flex-md-column,.flex-md-row {
        -webkit-box-direction:normal!important
    }

    .flex-md-row {
        -webkit-box-orient: horizontal!important;
        -ms-flex-direction: row!important;
        flex-direction: row!important
    }

    .flex-md-column {
        -webkit-box-orient: vertical!important;
        -ms-flex-direction: column!important;
        flex-direction: column!important
    }

    .flex-md-row-reverse {
        -webkit-box-orient: horizontal!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: row-reverse!important;
        flex-direction: row-reverse!important
    }

    .flex-md-column-reverse {
        -webkit-box-orient: vertical!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: column-reverse!important;
        flex-direction: column-reverse!important
    }

    .flex-md-wrap {
        -ms-flex-wrap: wrap!important;
        flex-wrap: wrap!important
    }

    .flex-md-nowrap {
        -ms-flex-wrap: nowrap!important;
        flex-wrap: nowrap!important
    }

    .flex-md-wrap-reverse {
        -ms-flex-wrap: wrap-reverse!important;
        flex-wrap: wrap-reverse!important
    }

    .justify-content-md-start {
        -webkit-box-pack: start!important;
        -ms-flex-pack: start!important;
        justify-content: flex-start!important
    }

    .justify-content-md-end {
        -webkit-box-pack: end!important;
        -ms-flex-pack: end!important;
        justify-content: flex-end!important
    }

    .justify-content-md-center {
        -webkit-box-pack: center!important;
        -ms-flex-pack: center!important;
        justify-content: center!important
    }

    .justify-content-md-between {
        -webkit-box-pack: justify!important;
        -ms-flex-pack: justify!important;
        justify-content: space-between!important
    }

    .justify-content-md-around {
        -ms-flex-pack: distribute!important;
        justify-content: space-around!important
    }

    .align-items-md-start {
        -webkit-box-align: start!important;
        -ms-flex-align: start!important;
        align-items: flex-start!important
    }

    .align-items-md-end {
        -webkit-box-align: end!important;
        -ms-flex-align: end!important;
        align-items: flex-end!important
    }

    .align-items-md-center {
        -webkit-box-align: center!important;
        -ms-flex-align: center!important;
        align-items: center!important
    }

    .align-items-md-baseline {
        -webkit-box-align: baseline!important;
        -ms-flex-align: baseline!important;
        align-items: baseline!important
    }

    .align-items-md-stretch {
        -webkit-box-align: stretch!important;
        -ms-flex-align: stretch!important;
        align-items: stretch!important
    }

    .align-content-md-start {
        -ms-flex-line-pack: start!important;
        align-content: flex-start!important
    }

    .align-content-md-end {
        -ms-flex-line-pack: end!important;
        align-content: flex-end!important
    }

    .align-content-md-center {
        -ms-flex-line-pack: center!important;
        align-content: center!important
    }

    .align-content-md-between {
        -ms-flex-line-pack: justify!important;
        align-content: space-between!important
    }

    .align-content-md-around {
        -ms-flex-line-pack: distribute!important;
        align-content: space-around!important
    }

    .align-content-md-stretch {
        -ms-flex-line-pack: stretch!important;
        align-content: stretch!important
    }

    .align-self-md-auto {
        -ms-flex-item-align: auto!important;
        align-self: auto!important
    }

    .align-self-md-start {
        -ms-flex-item-align: start!important;
        align-self: flex-start!important
    }

    .align-self-md-end {
        -ms-flex-item-align: end!important;
        align-self: flex-end!important
    }

    .align-self-md-center {
        -ms-flex-item-align: center!important;
        align-self: center!important
    }

    .align-self-md-baseline {
        -ms-flex-item-align: baseline!important;
        align-self: baseline!important
    }

    .align-self-md-stretch {
        -ms-flex-item-align: stretch!important;
        align-self: stretch!important
    }
}

@media (min-width: 992px) {
    .flex-lg-column,.flex-lg-row {
        -webkit-box-direction:normal!important
    }

    .flex-lg-row {
        -webkit-box-orient: horizontal!important;
        -ms-flex-direction: row!important;
        flex-direction: row!important
    }

    .flex-lg-column {
        -webkit-box-orient: vertical!important;
        -ms-flex-direction: column!important;
        flex-direction: column!important
    }

    .flex-lg-row-reverse {
        -webkit-box-orient: horizontal!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: row-reverse!important;
        flex-direction: row-reverse!important
    }

    .flex-lg-column-reverse {
        -webkit-box-orient: vertical!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: column-reverse!important;
        flex-direction: column-reverse!important
    }

    .flex-lg-wrap {
        -ms-flex-wrap: wrap!important;
        flex-wrap: wrap!important
    }

    .flex-lg-nowrap {
        -ms-flex-wrap: nowrap!important;
        flex-wrap: nowrap!important
    }

    .flex-lg-wrap-reverse {
        -ms-flex-wrap: wrap-reverse!important;
        flex-wrap: wrap-reverse!important
    }

    .justify-content-lg-start {
        -webkit-box-pack: start!important;
        -ms-flex-pack: start!important;
        justify-content: flex-start!important
    }

    .justify-content-lg-end {
        -webkit-box-pack: end!important;
        -ms-flex-pack: end!important;
        justify-content: flex-end!important
    }

    .justify-content-lg-center {
        -webkit-box-pack: center!important;
        -ms-flex-pack: center!important;
        justify-content: center!important
    }

    .justify-content-lg-between {
        -webkit-box-pack: justify!important;
        -ms-flex-pack: justify!important;
        justify-content: space-between!important
    }

    .justify-content-lg-around {
        -ms-flex-pack: distribute!important;
        justify-content: space-around!important
    }

    .align-items-lg-start {
        -webkit-box-align: start!important;
        -ms-flex-align: start!important;
        align-items: flex-start!important
    }

    .align-items-lg-end {
        -webkit-box-align: end!important;
        -ms-flex-align: end!important;
        align-items: flex-end!important
    }

    .align-items-lg-center {
        -webkit-box-align: center!important;
        -ms-flex-align: center!important;
        align-items: center!important
    }

    .align-items-lg-baseline {
        -webkit-box-align: baseline!important;
        -ms-flex-align: baseline!important;
        align-items: baseline!important
    }

    .align-items-lg-stretch {
        -webkit-box-align: stretch!important;
        -ms-flex-align: stretch!important;
        align-items: stretch!important
    }

    .align-content-lg-start {
        -ms-flex-line-pack: start!important;
        align-content: flex-start!important
    }

    .align-content-lg-end {
        -ms-flex-line-pack: end!important;
        align-content: flex-end!important
    }

    .align-content-lg-center {
        -ms-flex-line-pack: center!important;
        align-content: center!important
    }

    .align-content-lg-between {
        -ms-flex-line-pack: justify!important;
        align-content: space-between!important
    }

    .align-content-lg-around {
        -ms-flex-line-pack: distribute!important;
        align-content: space-around!important
    }

    .align-content-lg-stretch {
        -ms-flex-line-pack: stretch!important;
        align-content: stretch!important
    }

    .align-self-lg-auto {
        -ms-flex-item-align: auto!important;
        align-self: auto!important
    }

    .align-self-lg-start {
        -ms-flex-item-align: start!important;
        align-self: flex-start!important
    }

    .align-self-lg-end {
        -ms-flex-item-align: end!important;
        align-self: flex-end!important
    }

    .align-self-lg-center {
        -ms-flex-item-align: center!important;
        align-self: center!important
    }

    .align-self-lg-baseline {
        -ms-flex-item-align: baseline!important;
        align-self: baseline!important
    }

    .align-self-lg-stretch {
        -ms-flex-item-align: stretch!important;
        align-self: stretch!important
    }
}

@media (min-width: 1200px) {
    .flex-xl-column,.flex-xl-row {
        -webkit-box-direction:normal!important
    }

    .flex-xl-row {
        -webkit-box-orient: horizontal!important;
        -ms-flex-direction: row!important;
        flex-direction: row!important
    }

    .flex-xl-column {
        -webkit-box-orient: vertical!important;
        -ms-flex-direction: column!important;
        flex-direction: column!important
    }

    .flex-xl-row-reverse {
        -webkit-box-orient: horizontal!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: row-reverse!important;
        flex-direction: row-reverse!important
    }

    .flex-xl-column-reverse {
        -webkit-box-orient: vertical!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: column-reverse!important;
        flex-direction: column-reverse!important
    }

    .flex-xl-wrap {
        -ms-flex-wrap: wrap!important;
        flex-wrap: wrap!important
    }

    .flex-xl-nowrap {
        -ms-flex-wrap: nowrap!important;
        flex-wrap: nowrap!important
    }

    .flex-xl-wrap-reverse {
        -ms-flex-wrap: wrap-reverse!important;
        flex-wrap: wrap-reverse!important
    }

    .justify-content-xl-start {
        -webkit-box-pack: start!important;
        -ms-flex-pack: start!important;
        justify-content: flex-start!important
    }

    .justify-content-xl-end {
        -webkit-box-pack: end!important;
        -ms-flex-pack: end!important;
        justify-content: flex-end!important
    }

    .justify-content-xl-center {
        -webkit-box-pack: center!important;
        -ms-flex-pack: center!important;
        justify-content: center!important
    }

    .justify-content-xl-between {
        -webkit-box-pack: justify!important;
        -ms-flex-pack: justify!important;
        justify-content: space-between!important
    }

    .justify-content-xl-around {
        -ms-flex-pack: distribute!important;
        justify-content: space-around!important
    }

    .align-items-xl-start {
        -webkit-box-align: start!important;
        -ms-flex-align: start!important;
        align-items: flex-start!important
    }

    .align-items-xl-end {
        -webkit-box-align: end!important;
        -ms-flex-align: end!important;
        align-items: flex-end!important
    }

    .align-items-xl-center {
        -webkit-box-align: center!important;
        -ms-flex-align: center!important;
        align-items: center!important
    }

    .align-items-xl-baseline {
        -webkit-box-align: baseline!important;
        -ms-flex-align: baseline!important;
        align-items: baseline!important
    }

    .align-items-xl-stretch {
        -webkit-box-align: stretch!important;
        -ms-flex-align: stretch!important;
        align-items: stretch!important
    }

    .align-content-xl-start {
        -ms-flex-line-pack: start!important;
        align-content: flex-start!important
    }

    .align-content-xl-end {
        -ms-flex-line-pack: end!important;
        align-content: flex-end!important
    }

    .align-content-xl-center {
        -ms-flex-line-pack: center!important;
        align-content: center!important
    }

    .align-content-xl-between {
        -ms-flex-line-pack: justify!important;
        align-content: space-between!important
    }

    .align-content-xl-around {
        -ms-flex-line-pack: distribute!important;
        align-content: space-around!important
    }

    .align-content-xl-stretch {
        -ms-flex-line-pack: stretch!important;
        align-content: stretch!important
    }

    .align-self-xl-auto {
        -ms-flex-item-align: auto!important;
        align-self: auto!important
    }

    .align-self-xl-start {
        -ms-flex-item-align: start!important;
        align-self: flex-start!important
    }

    .align-self-xl-end {
        -ms-flex-item-align: end!important;
        align-self: flex-end!important
    }

    .align-self-xl-center {
        -ms-flex-item-align: center!important;
        align-self: center!important
    }

    .align-self-xl-baseline {
        -ms-flex-item-align: baseline!important;
        align-self: baseline!important
    }

    .align-self-xl-stretch {
        -ms-flex-item-align: stretch!important;
        align-self: stretch!important
    }
}

.float-left {
    float: left!important
}

.float-right {
    float: right!important
}

.float-none {
    float: none!important
}

@media (min-width: 576px) {
    .float-sm-left {
        float:left!important
    }

    .float-sm-right {
        float: right!important
    }

    .float-sm-none {
        float: none!important
    }
}

@media (min-width: 768px) {
    .float-md-left {
        float:left!important
    }

    .float-md-right {
        float: right!important
    }

    .float-md-none {
        float: none!important
    }
}

@media (min-width: 992px) {
    .float-lg-left {
        float:left!important
    }

    .float-lg-right {
        float: right!important
    }

    .float-lg-none {
        float: none!important
    }
}

@media (min-width: 1200px) {
    .float-xl-left {
        float:left!important
    }

    .float-xl-right {
        float: right!important
    }

    .float-xl-none {
        float: none!important
    }
}

.position-static {
    position: static!important
}

.position-relative {
    position: relative!important
}

.position-absolute {
    position: absolute!important
}

.position-fixed {
    position: fixed!important
}

.position-sticky {
    position: -webkit-sticky!important;
    position: sticky!important
}

.fixed-bottom,.fixed-top {
    position: fixed;
    right: 0;
    z-index: 1030;
    left: 0
}

.fixed-top {
    top: 0
}

.fixed-bottom {
    bottom: 0
}

@supports ((position: -webkit-sticky) or (position:sticky)) {
    .sticky-top {
        position:-webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020
    }
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0
}

.sr-only-focusable:active,.sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
    -webkit-clip-path: none;
    clip-path: none
}

.b-panels,.text-truncate {
    overflow: hidden
}

.w-25 {
    width: 25%!important
}

.w-50 {
    width: 50%!important
}

.w-75 {
    width: 75%!important
}

.w-100 {
    width: 100%!important
}

.h-25 {
    height: 25%!important
}

.h-50 {
    height: 50%!important
}

.h-75 {
    height: 75%!important
}

.h-100 {
    height: 100%!important
}

.mw-100 {
    max-width: 100%!important
}

.mh-100 {
    max-height: 100%!important
}

.m-0 {
    margin: 0!important
}

.mt-0,.my-0 {
    margin-top: 0!important
}

.mr-0,.mx-0 {
    margin-right: 0!important
}

.mb-0,.my-0 {
    margin-bottom: 0!important
}

.ml-0,.mx-0 {
    margin-left: 0!important
}

.m-1 {
    margin: .25rem!important
}

.mt-1,.my-1 {
    margin-top: .25rem!important
}

.mr-1,.mx-1 {
    margin-right: .25rem!important
}

.mb-1,.my-1 {
    margin-bottom: .25rem!important
}

.ml-1,.mx-1 {
    margin-left: .25rem!important
}

.m-2 {
    margin: .5rem!important
}

.mt-2,.my-2 {
    margin-top: .5rem!important
}

.mr-2,.mx-2 {
    margin-right: .5rem!important
}

.mb-2,.my-2 {
    margin-bottom: .5rem!important
}

.ml-2,.mx-2 {
    margin-left: .5rem!important
}

.m-3 {
    margin: 1rem!important
}

.mt-3,.my-3 {
    margin-top: 1rem!important
}

.mr-3,.mx-3 {
    margin-right: 1rem!important
}

.mb-3,.my-3 {
    margin-bottom: 1rem!important
}

.ml-3,.mx-3 {
    margin-left: 1rem!important
}

.m-4 {
    margin: 1.5rem!important
}

.mt-4,.my-4 {
    margin-top: 1.5rem!important
}

.mr-4,.mx-4 {
    margin-right: 1.5rem!important
}

.mb-4,.my-4 {
    margin-bottom: 1.5rem!important
}

.ml-4,.mx-4 {
    margin-left: 1.5rem!important
}

.m-5 {
    margin: 3rem!important
}

.mt-5,.my-5 {
    margin-top: 3rem!important
}

.mr-5,.mx-5 {
    margin-right: 3rem!important
}

.mb-5,.my-5 {
    margin-bottom: 3rem!important
}

.ml-5,.mx-5 {
    margin-left: 3rem!important
}

.p-0 {
    padding: 0!important
}

.pt-0,.py-0 {
    padding-top: 0!important
}

.pr-0,.px-0 {
    padding-right: 0!important
}

.pb-0,.py-0 {
    padding-bottom: 0!important
}

.pl-0,.px-0 {
    padding-left: 0!important
}

.p-1 {
    padding: .25rem!important
}

.pt-1,.py-1 {
    padding-top: .25rem!important
}

.pr-1,.px-1 {
    padding-right: .25rem!important
}

.pb-1,.py-1 {
    padding-bottom: .25rem!important
}

.pl-1,.px-1 {
    padding-left: .25rem!important
}

.p-2 {
    padding: .5rem!important
}

.pt-2,.py-2 {
    padding-top: .5rem!important
}

.pr-2,.px-2 {
    padding-right: .5rem!important
}

.pb-2,.py-2 {
    padding-bottom: .5rem!important
}

.pl-2,.px-2 {
    padding-left: .5rem!important
}

.p-3 {
    padding: 1rem!important
}

.pt-3,.py-3 {
    padding-top: 1rem!important
}

.pr-3,.px-3 {
    padding-right: 1rem!important
}

.pb-3,.py-3 {
    padding-bottom: 1rem!important
}

.pl-3,.px-3 {
    padding-left: 1rem!important
}

.p-4 {
    padding: 1.5rem!important
}

.pt-4,.py-4 {
    padding-top: 1.5rem!important
}

.pr-4,.px-4 {
    padding-right: 1.5rem!important
}

.pb-4,.py-4 {
    padding-bottom: 1.5rem!important
}

.pl-4,.px-4 {
    padding-left: 1.5rem!important
}

.p-5 {
    padding: 3rem!important
}

.pt-5,.py-5 {
    padding-top: 3rem!important
}

.pr-5,.px-5 {
    padding-right: 3rem!important
}

.pb-5,.py-5 {
    padding-bottom: 3rem!important
}

.pl-5,.px-5 {
    padding-left: 3rem!important
}

.m-auto {
    margin: auto!important
}

.mt-auto,.my-auto {
    margin-top: auto!important
}

.mr-auto,.mx-auto {
    margin-right: auto!important
}

.mb-auto,.my-auto {
    margin-bottom: auto!important
}

.ml-auto,.mx-auto {
    margin-left: auto!important
}

@media (min-width: 576px) {
    .m-sm-0 {
        margin:0!important
    }

    .mt-sm-0,.my-sm-0 {
        margin-top: 0!important
    }

    .mr-sm-0,.mx-sm-0 {
        margin-right: 0!important
    }

    .mb-sm-0,.my-sm-0 {
        margin-bottom: 0!important
    }

    .ml-sm-0,.mx-sm-0 {
        margin-left: 0!important
    }

    .m-sm-1 {
        margin: .25rem!important
    }

    .mt-sm-1,.my-sm-1 {
        margin-top: .25rem!important
    }

    .mr-sm-1,.mx-sm-1 {
        margin-right: .25rem!important
    }

    .mb-sm-1,.my-sm-1 {
        margin-bottom: .25rem!important
    }

    .ml-sm-1,.mx-sm-1 {
        margin-left: .25rem!important
    }

    .m-sm-2 {
        margin: .5rem!important
    }

    .mt-sm-2,.my-sm-2 {
        margin-top: .5rem!important
    }

    .mr-sm-2,.mx-sm-2 {
        margin-right: .5rem!important
    }

    .mb-sm-2,.my-sm-2 {
        margin-bottom: .5rem!important
    }

    .ml-sm-2,.mx-sm-2 {
        margin-left: .5rem!important
    }

    .m-sm-3 {
        margin: 1rem!important
    }

    .mt-sm-3,.my-sm-3 {
        margin-top: 1rem!important
    }

    .mr-sm-3,.mx-sm-3 {
        margin-right: 1rem!important
    }

    .mb-sm-3,.my-sm-3 {
        margin-bottom: 1rem!important
    }

    .ml-sm-3,.mx-sm-3 {
        margin-left: 1rem!important
    }

    .m-sm-4 {
        margin: 1.5rem!important
    }

    .mt-sm-4,.my-sm-4 {
        margin-top: 1.5rem!important
    }

    .mr-sm-4,.mx-sm-4 {
        margin-right: 1.5rem!important
    }

    .mb-sm-4,.my-sm-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-sm-4,.mx-sm-4 {
        margin-left: 1.5rem!important
    }

    .m-sm-5 {
        margin: 3rem!important
    }

    .mt-sm-5,.my-sm-5 {
        margin-top: 3rem!important
    }

    .mr-sm-5,.mx-sm-5 {
        margin-right: 3rem!important
    }

    .mb-sm-5,.my-sm-5 {
        margin-bottom: 3rem!important
    }

    .ml-sm-5,.mx-sm-5 {
        margin-left: 3rem!important
    }

    .p-sm-0 {
        padding: 0!important
    }

    .pt-sm-0,.py-sm-0 {
        padding-top: 0!important
    }

    .pr-sm-0,.px-sm-0 {
        padding-right: 0!important
    }

    .pb-sm-0,.py-sm-0 {
        padding-bottom: 0!important
    }

    .pl-sm-0,.px-sm-0 {
        padding-left: 0!important
    }

    .p-sm-1 {
        padding: .25rem!important
    }

    .pt-sm-1,.py-sm-1 {
        padding-top: .25rem!important
    }

    .pr-sm-1,.px-sm-1 {
        padding-right: .25rem!important
    }

    .pb-sm-1,.py-sm-1 {
        padding-bottom: .25rem!important
    }

    .pl-sm-1,.px-sm-1 {
        padding-left: .25rem!important
    }

    .p-sm-2 {
        padding: .5rem!important
    }

    .pt-sm-2,.py-sm-2 {
        padding-top: .5rem!important
    }

    .pr-sm-2,.px-sm-2 {
        padding-right: .5rem!important
    }

    .pb-sm-2,.py-sm-2 {
        padding-bottom: .5rem!important
    }

    .pl-sm-2,.px-sm-2 {
        padding-left: .5rem!important
    }

    .p-sm-3 {
        padding: 1rem!important
    }

    .pt-sm-3,.py-sm-3 {
        padding-top: 1rem!important
    }

    .pr-sm-3,.px-sm-3 {
        padding-right: 1rem!important
    }

    .pb-sm-3,.py-sm-3 {
        padding-bottom: 1rem!important
    }

    .pl-sm-3,.px-sm-3 {
        padding-left: 1rem!important
    }

    .p-sm-4 {
        padding: 1.5rem!important
    }

    .pt-sm-4,.py-sm-4 {
        padding-top: 1.5rem!important
    }

    .pr-sm-4,.px-sm-4 {
        padding-right: 1.5rem!important
    }

    .pb-sm-4,.py-sm-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-sm-4,.px-sm-4 {
        padding-left: 1.5rem!important
    }

    .p-sm-5 {
        padding: 3rem!important
    }

    .pt-sm-5,.py-sm-5 {
        padding-top: 3rem!important
    }

    .pr-sm-5,.px-sm-5 {
        padding-right: 3rem!important
    }

    .pb-sm-5,.py-sm-5 {
        padding-bottom: 3rem!important
    }

    .pl-sm-5,.px-sm-5 {
        padding-left: 3rem!important
    }

    .m-sm-auto {
        margin: auto!important
    }

    .mt-sm-auto,.my-sm-auto {
        margin-top: auto!important
    }

    .mr-sm-auto,.mx-sm-auto {
        margin-right: auto!important
    }

    .mb-sm-auto,.my-sm-auto {
        margin-bottom: auto!important
    }

    .ml-sm-auto,.mx-sm-auto {
        margin-left: auto!important
    }
}

@media (min-width: 768px) {
    .m-md-0 {
        margin:0!important
    }

    .mt-md-0,.my-md-0 {
        margin-top: 0!important
    }

    .mr-md-0,.mx-md-0 {
        margin-right: 0!important
    }

    .mb-md-0,.my-md-0 {
        margin-bottom: 0!important
    }

    .ml-md-0,.mx-md-0 {
        margin-left: 0!important
    }

    .m-md-1 {
        margin: .25rem!important
    }

    .mt-md-1,.my-md-1 {
        margin-top: .25rem!important
    }

    .mr-md-1,.mx-md-1 {
        margin-right: .25rem!important
    }

    .mb-md-1,.my-md-1 {
        margin-bottom: .25rem!important
    }

    .ml-md-1,.mx-md-1 {
        margin-left: .25rem!important
    }

    .m-md-2 {
        margin: .5rem!important
    }

    .mt-md-2,.my-md-2 {
        margin-top: .5rem!important
    }

    .mr-md-2,.mx-md-2 {
        margin-right: .5rem!important
    }

    .mb-md-2,.my-md-2 {
        margin-bottom: .5rem!important
    }

    .ml-md-2,.mx-md-2 {
        margin-left: .5rem!important
    }

    .m-md-3 {
        margin: 1rem!important
    }

    .mt-md-3,.my-md-3 {
        margin-top: 1rem!important
    }

    .mr-md-3,.mx-md-3 {
        margin-right: 1rem!important
    }

    .mb-md-3,.my-md-3 {
        margin-bottom: 1rem!important
    }

    .ml-md-3,.mx-md-3 {
        margin-left: 1rem!important
    }

    .m-md-4 {
        margin: 1.5rem!important
    }

    .mt-md-4,.my-md-4 {
        margin-top: 1.5rem!important
    }

    .mr-md-4,.mx-md-4 {
        margin-right: 1.5rem!important
    }

    .mb-md-4,.my-md-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-md-4,.mx-md-4 {
        margin-left: 1.5rem!important
    }

    .m-md-5 {
        margin: 3rem!important
    }

    .mt-md-5,.my-md-5 {
        margin-top: 3rem!important
    }

    .mr-md-5,.mx-md-5 {
        margin-right: 3rem!important
    }

    .mb-md-5,.my-md-5 {
        margin-bottom: 3rem!important
    }

    .ml-md-5,.mx-md-5 {
        margin-left: 3rem!important
    }

    .p-md-0 {
        padding: 0!important
    }

    .pt-md-0,.py-md-0 {
        padding-top: 0!important
    }

    .pr-md-0,.px-md-0 {
        padding-right: 0!important
    }

    .pb-md-0,.py-md-0 {
        padding-bottom: 0!important
    }

    .pl-md-0,.px-md-0 {
        padding-left: 0!important
    }

    .p-md-1 {
        padding: .25rem!important
    }

    .pt-md-1,.py-md-1 {
        padding-top: .25rem!important
    }

    .pr-md-1,.px-md-1 {
        padding-right: .25rem!important
    }

    .pb-md-1,.py-md-1 {
        padding-bottom: .25rem!important
    }

    .pl-md-1,.px-md-1 {
        padding-left: .25rem!important
    }

    .p-md-2 {
        padding: .5rem!important
    }

    .pt-md-2,.py-md-2 {
        padding-top: .5rem!important
    }

    .pr-md-2,.px-md-2 {
        padding-right: .5rem!important
    }

    .pb-md-2,.py-md-2 {
        padding-bottom: .5rem!important
    }

    .pl-md-2,.px-md-2 {
        padding-left: .5rem!important
    }

    .p-md-3 {
        padding: 1rem!important
    }

    .pt-md-3,.py-md-3 {
        padding-top: 1rem!important
    }

    .pr-md-3,.px-md-3 {
        padding-right: 1rem!important
    }

    .pb-md-3,.py-md-3 {
        padding-bottom: 1rem!important
    }

    .pl-md-3,.px-md-3 {
        padding-left: 1rem!important
    }

    .p-md-4 {
        padding: 1.5rem!important
    }

    .pt-md-4,.py-md-4 {
        padding-top: 1.5rem!important
    }

    .pr-md-4,.px-md-4 {
        padding-right: 1.5rem!important
    }

    .pb-md-4,.py-md-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-md-4,.px-md-4 {
        padding-left: 1.5rem!important
    }

    .p-md-5 {
        padding: 3rem!important
    }

    .pt-md-5,.py-md-5 {
        padding-top: 3rem!important
    }

    .pr-md-5,.px-md-5 {
        padding-right: 3rem!important
    }

    .pb-md-5,.py-md-5 {
        padding-bottom: 3rem!important
    }

    .pl-md-5,.px-md-5 {
        padding-left: 3rem!important
    }

    .m-md-auto {
        margin: auto!important
    }

    .mt-md-auto,.my-md-auto {
        margin-top: auto!important
    }

    .mr-md-auto,.mx-md-auto {
        margin-right: auto!important
    }

    .mb-md-auto,.my-md-auto {
        margin-bottom: auto!important
    }

    .ml-md-auto,.mx-md-auto {
        margin-left: auto!important
    }
}

@media (min-width: 992px) {
    .m-lg-0 {
        margin:0!important
    }

    .mt-lg-0,.my-lg-0 {
        margin-top: 0!important
    }

    .mr-lg-0,.mx-lg-0 {
        margin-right: 0!important
    }

    .mb-lg-0,.my-lg-0 {
        margin-bottom: 0!important
    }

    .ml-lg-0,.mx-lg-0 {
        margin-left: 0!important
    }

    .m-lg-1 {
        margin: .25rem!important
    }

    .mt-lg-1,.my-lg-1 {
        margin-top: .25rem!important
    }

    .mr-lg-1,.mx-lg-1 {
        margin-right: .25rem!important
    }

    .mb-lg-1,.my-lg-1 {
        margin-bottom: .25rem!important
    }

    .ml-lg-1,.mx-lg-1 {
        margin-left: .25rem!important
    }

    .m-lg-2 {
        margin: .5rem!important
    }

    .mt-lg-2,.my-lg-2 {
        margin-top: .5rem!important
    }

    .mr-lg-2,.mx-lg-2 {
        margin-right: .5rem!important
    }

    .mb-lg-2,.my-lg-2 {
        margin-bottom: .5rem!important
    }

    .ml-lg-2,.mx-lg-2 {
        margin-left: .5rem!important
    }

    .m-lg-3 {
        margin: 1rem!important
    }

    .mt-lg-3,.my-lg-3 {
        margin-top: 1rem!important
    }

    .mr-lg-3,.mx-lg-3 {
        margin-right: 1rem!important
    }

    .mb-lg-3,.my-lg-3 {
        margin-bottom: 1rem!important
    }

    .ml-lg-3,.mx-lg-3 {
        margin-left: 1rem!important
    }

    .m-lg-4 {
        margin: 1.5rem!important
    }

    .mt-lg-4,.my-lg-4 {
        margin-top: 1.5rem!important
    }

    .mr-lg-4,.mx-lg-4 {
        margin-right: 1.5rem!important
    }

    .mb-lg-4,.my-lg-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-lg-4,.mx-lg-4 {
        margin-left: 1.5rem!important
    }

    .m-lg-5 {
        margin: 3rem!important
    }

    .mt-lg-5,.my-lg-5 {
        margin-top: 3rem!important
    }

    .mr-lg-5,.mx-lg-5 {
        margin-right: 3rem!important
    }

    .mb-lg-5,.my-lg-5 {
        margin-bottom: 3rem!important
    }

    .ml-lg-5,.mx-lg-5 {
        margin-left: 3rem!important
    }

    .p-lg-0 {
        padding: 0!important
    }

    .pt-lg-0,.py-lg-0 {
        padding-top: 0!important
    }

    .pr-lg-0,.px-lg-0 {
        padding-right: 0!important
    }

    .pb-lg-0,.py-lg-0 {
        padding-bottom: 0!important
    }

    .pl-lg-0,.px-lg-0 {
        padding-left: 0!important
    }

    .p-lg-1 {
        padding: .25rem!important
    }

    .pt-lg-1,.py-lg-1 {
        padding-top: .25rem!important
    }

    .pr-lg-1,.px-lg-1 {
        padding-right: .25rem!important
    }

    .pb-lg-1,.py-lg-1 {
        padding-bottom: .25rem!important
    }

    .pl-lg-1,.px-lg-1 {
        padding-left: .25rem!important
    }

    .p-lg-2 {
        padding: .5rem!important
    }

    .pt-lg-2,.py-lg-2 {
        padding-top: .5rem!important
    }

    .pr-lg-2,.px-lg-2 {
        padding-right: .5rem!important
    }

    .pb-lg-2,.py-lg-2 {
        padding-bottom: .5rem!important
    }

    .pl-lg-2,.px-lg-2 {
        padding-left: .5rem!important
    }

    .p-lg-3 {
        padding: 1rem!important
    }

    .pt-lg-3,.py-lg-3 {
        padding-top: 1rem!important
    }

    .pr-lg-3,.px-lg-3 {
        padding-right: 1rem!important
    }

    .pb-lg-3,.py-lg-3 {
        padding-bottom: 1rem!important
    }

    .pl-lg-3,.px-lg-3 {
        padding-left: 1rem!important
    }

    .p-lg-4 {
        padding: 1.5rem!important
    }

    .pt-lg-4,.py-lg-4 {
        padding-top: 1.5rem!important
    }

    .pr-lg-4,.px-lg-4 {
        padding-right: 1.5rem!important
    }

    .pb-lg-4,.py-lg-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-lg-4,.px-lg-4 {
        padding-left: 1.5rem!important
    }

    .p-lg-5 {
        padding: 3rem!important
    }

    .pt-lg-5,.py-lg-5 {
        padding-top: 3rem!important
    }

    .pr-lg-5,.px-lg-5 {
        padding-right: 3rem!important
    }

    .pb-lg-5,.py-lg-5 {
        padding-bottom: 3rem!important
    }

    .pl-lg-5,.px-lg-5 {
        padding-left: 3rem!important
    }

    .m-lg-auto {
        margin: auto!important
    }

    .mt-lg-auto,.my-lg-auto {
        margin-top: auto!important
    }

    .mr-lg-auto,.mx-lg-auto {
        margin-right: auto!important
    }

    .mb-lg-auto,.my-lg-auto {
        margin-bottom: auto!important
    }

    .ml-lg-auto,.mx-lg-auto {
        margin-left: auto!important
    }
}

@media (min-width: 1200px) {
    .m-xl-0 {
        margin:0!important
    }

    .mt-xl-0,.my-xl-0 {
        margin-top: 0!important
    }

    .mr-xl-0,.mx-xl-0 {
        margin-right: 0!important
    }

    .mb-xl-0,.my-xl-0 {
        margin-bottom: 0!important
    }

    .ml-xl-0,.mx-xl-0 {
        margin-left: 0!important
    }

    .m-xl-1 {
        margin: .25rem!important
    }

    .mt-xl-1,.my-xl-1 {
        margin-top: .25rem!important
    }

    .mr-xl-1,.mx-xl-1 {
        margin-right: .25rem!important
    }

    .mb-xl-1,.my-xl-1 {
        margin-bottom: .25rem!important
    }

    .ml-xl-1,.mx-xl-1 {
        margin-left: .25rem!important
    }

    .m-xl-2 {
        margin: .5rem!important
    }

    .mt-xl-2,.my-xl-2 {
        margin-top: .5rem!important
    }

    .mr-xl-2,.mx-xl-2 {
        margin-right: .5rem!important
    }

    .mb-xl-2,.my-xl-2 {
        margin-bottom: .5rem!important
    }

    .ml-xl-2,.mx-xl-2 {
        margin-left: .5rem!important
    }

    .m-xl-3 {
        margin: 1rem!important
    }

    .mt-xl-3,.my-xl-3 {
        margin-top: 1rem!important
    }

    .mr-xl-3,.mx-xl-3 {
        margin-right: 1rem!important
    }

    .mb-xl-3,.my-xl-3 {
        margin-bottom: 1rem!important
    }

    .ml-xl-3,.mx-xl-3 {
        margin-left: 1rem!important
    }

    .m-xl-4 {
        margin: 1.5rem!important
    }

    .mt-xl-4,.my-xl-4 {
        margin-top: 1.5rem!important
    }

    .mr-xl-4,.mx-xl-4 {
        margin-right: 1.5rem!important
    }

    .mb-xl-4,.my-xl-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-xl-4,.mx-xl-4 {
        margin-left: 1.5rem!important
    }

    .m-xl-5 {
        margin: 3rem!important
    }

    .mt-xl-5,.my-xl-5 {
        margin-top: 3rem!important
    }

    .mr-xl-5,.mx-xl-5 {
        margin-right: 3rem!important
    }

    .mb-xl-5,.my-xl-5 {
        margin-bottom: 3rem!important
    }

    .ml-xl-5,.mx-xl-5 {
        margin-left: 3rem!important
    }

    .p-xl-0 {
        padding: 0!important
    }

    .pt-xl-0,.py-xl-0 {
        padding-top: 0!important
    }

    .pr-xl-0,.px-xl-0 {
        padding-right: 0!important
    }

    .pb-xl-0,.py-xl-0 {
        padding-bottom: 0!important
    }

    .pl-xl-0,.px-xl-0 {
        padding-left: 0!important
    }

    .p-xl-1 {
        padding: .25rem!important
    }

    .pt-xl-1,.py-xl-1 {
        padding-top: .25rem!important
    }

    .pr-xl-1,.px-xl-1 {
        padding-right: .25rem!important
    }

    .pb-xl-1,.py-xl-1 {
        padding-bottom: .25rem!important
    }

    .pl-xl-1,.px-xl-1 {
        padding-left: .25rem!important
    }

    .p-xl-2 {
        padding: .5rem!important
    }

    .pt-xl-2,.py-xl-2 {
        padding-top: .5rem!important
    }

    .pr-xl-2,.px-xl-2 {
        padding-right: .5rem!important
    }

    .pb-xl-2,.py-xl-2 {
        padding-bottom: .5rem!important
    }

    .pl-xl-2,.px-xl-2 {
        padding-left: .5rem!important
    }

    .p-xl-3 {
        padding: 1rem!important
    }

    .pt-xl-3,.py-xl-3 {
        padding-top: 1rem!important
    }

    .pr-xl-3,.px-xl-3 {
        padding-right: 1rem!important
    }

    .pb-xl-3,.py-xl-3 {
        padding-bottom: 1rem!important
    }

    .pl-xl-3,.px-xl-3 {
        padding-left: 1rem!important
    }

    .p-xl-4 {
        padding: 1.5rem!important
    }

    .pt-xl-4,.py-xl-4 {
        padding-top: 1.5rem!important
    }

    .pr-xl-4,.px-xl-4 {
        padding-right: 1.5rem!important
    }

    .pb-xl-4,.py-xl-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-xl-4,.px-xl-4 {
        padding-left: 1.5rem!important
    }

    .p-xl-5 {
        padding: 3rem!important
    }

    .pt-xl-5,.py-xl-5 {
        padding-top: 3rem!important
    }

    .pr-xl-5,.px-xl-5 {
        padding-right: 3rem!important
    }

    .pb-xl-5,.py-xl-5 {
        padding-bottom: 3rem!important
    }

    .pl-xl-5,.px-xl-5 {
        padding-left: 3rem!important
    }

    .m-xl-auto {
        margin: auto!important
    }

    .mt-xl-auto,.my-xl-auto {
        margin-top: auto!important
    }

    .mr-xl-auto,.mx-xl-auto {
        margin-right: auto!important
    }

    .mb-xl-auto,.my-xl-auto {
        margin-bottom: auto!important
    }

    .ml-xl-auto,.mx-xl-auto {
        margin-left: auto!important
    }
}

.text-justify {
    text-align: justify!important
}

.text-nowrap {
    white-space: nowrap!important
}

.profile-edit-btn,.text-truncate,.uiToken,time {
    white-space: nowrap
}

.text-truncate {
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis
}

.text-left {
    text-align: left!important
}

.text-right {
    text-align: right!important
}

.text-center {
    text-align: center!important
}

@media (min-width: 576px) {
    .text-sm-left {
        text-align:left!important
    }

    .text-sm-right {
        text-align: right!important
    }

    .text-sm-center {
        text-align: center!important
    }
}

@media (min-width: 768px) {
    .text-md-left {
        text-align:left!important
    }

    .text-md-right {
        text-align: right!important
    }

    .text-md-center {
        text-align: center!important
    }
}

@media (min-width: 992px) {
    .text-lg-left {
        text-align:left!important
    }

    .text-lg-right {
        text-align: right!important
    }

    .text-lg-center {
        text-align: center!important
    }
}

@media (min-width: 1200px) {
    .text-xl-left {
        text-align:left!important
    }

    .text-xl-right {
        text-align: right!important
    }

    .text-xl-center {
        text-align: center!important
    }
}

@media (min-width: 1400px) {
    .flex-ul-column,.flex-ul-row {
        -webkit-box-direction:normal!important
    }

    .flex-ul-row {
        -webkit-box-orient: horizontal!important;
        -ms-flex-direction: row!important;
        flex-direction: row!important
    }

    .flex-ul-column {
        -webkit-box-orient: vertical!important;
        -ms-flex-direction: column!important;
        flex-direction: column!important
    }

    .flex-ul-row-reverse {
        -webkit-box-orient: horizontal!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: row-reverse!important;
        flex-direction: row-reverse!important
    }

    .flex-ul-column-reverse {
        -webkit-box-orient: vertical!important;
        -webkit-box-direction: reverse!important;
        -ms-flex-direction: column-reverse!important;
        flex-direction: column-reverse!important
    }

    .flex-ul-wrap {
        -ms-flex-wrap: wrap!important;
        flex-wrap: wrap!important
    }

    .flex-ul-nowrap {
        -ms-flex-wrap: nowrap!important;
        flex-wrap: nowrap!important
    }

    .flex-ul-wrap-reverse {
        -ms-flex-wrap: wrap-reverse!important;
        flex-wrap: wrap-reverse!important
    }

    .justify-content-ul-start {
        -webkit-box-pack: start!important;
        -ms-flex-pack: start!important;
        justify-content: flex-start!important
    }

    .justify-content-ul-end {
        -webkit-box-pack: end!important;
        -ms-flex-pack: end!important;
        justify-content: flex-end!important
    }

    .justify-content-ul-center {
        -webkit-box-pack: center!important;
        -ms-flex-pack: center!important;
        justify-content: center!important
    }

    .justify-content-ul-between {
        -webkit-box-pack: justify!important;
        -ms-flex-pack: justify!important;
        justify-content: space-between!important
    }

    .justify-content-ul-around {
        -ms-flex-pack: distribute!important;
        justify-content: space-around!important
    }

    .align-items-ul-start {
        -webkit-box-align: start!important;
        -ms-flex-align: start!important;
        align-items: flex-start!important
    }

    .align-items-ul-end {
        -webkit-box-align: end!important;
        -ms-flex-align: end!important;
        align-items: flex-end!important
    }

    .align-items-ul-center {
        -webkit-box-align: center!important;
        -ms-flex-align: center!important;
        align-items: center!important
    }

    .align-items-ul-baseline {
        -webkit-box-align: baseline!important;
        -ms-flex-align: baseline!important;
        align-items: baseline!important
    }

    .align-items-ul-stretch {
        -webkit-box-align: stretch!important;
        -ms-flex-align: stretch!important;
        align-items: stretch!important
    }

    .align-content-ul-start {
        -ms-flex-line-pack: start!important;
        align-content: flex-start!important
    }

    .align-content-ul-end {
        -ms-flex-line-pack: end!important;
        align-content: flex-end!important
    }

    .align-content-ul-center {
        -ms-flex-line-pack: center!important;
        align-content: center!important
    }

    .align-content-ul-between {
        -ms-flex-line-pack: justify!important;
        align-content: space-between!important
    }

    .align-content-ul-around {
        -ms-flex-line-pack: distribute!important;
        align-content: space-around!important
    }

    .align-content-ul-stretch {
        -ms-flex-line-pack: stretch!important;
        align-content: stretch!important
    }

    .align-self-ul-auto {
        -ms-flex-item-align: auto!important;
        align-self: auto!important
    }

    .align-self-ul-start {
        -ms-flex-item-align: start!important;
        align-self: flex-start!important
    }

    .align-self-ul-end {
        -ms-flex-item-align: end!important;
        align-self: flex-end!important
    }

    .align-self-ul-center {
        -ms-flex-item-align: center!important;
        align-self: center!important
    }

    .align-self-ul-baseline {
        -ms-flex-item-align: baseline!important;
        align-self: baseline!important
    }

    .align-self-ul-stretch {
        -ms-flex-item-align: stretch!important;
        align-self: stretch!important
    }

    .float-ul-left {
        float: left!important
    }

    .float-ul-right {
        float: right!important
    }

    .float-ul-none {
        float: none!important
    }

    .m-ul-0 {
        margin: 0!important
    }

    .mt-ul-0,.my-ul-0 {
        margin-top: 0!important
    }

    .mr-ul-0,.mx-ul-0 {
        margin-right: 0!important
    }

    .mb-ul-0,.my-ul-0 {
        margin-bottom: 0!important
    }

    .ml-ul-0,.mx-ul-0 {
        margin-left: 0!important
    }

    .m-ul-1 {
        margin: .25rem!important
    }

    .mt-ul-1,.my-ul-1 {
        margin-top: .25rem!important
    }

    .mr-ul-1,.mx-ul-1 {
        margin-right: .25rem!important
    }

    .mb-ul-1,.my-ul-1 {
        margin-bottom: .25rem!important
    }

    .ml-ul-1,.mx-ul-1 {
        margin-left: .25rem!important
    }

    .m-ul-2 {
        margin: .5rem!important
    }

    .mt-ul-2,.my-ul-2 {
        margin-top: .5rem!important
    }

    .mr-ul-2,.mx-ul-2 {
        margin-right: .5rem!important
    }

    .mb-ul-2,.my-ul-2 {
        margin-bottom: .5rem!important
    }

    .ml-ul-2,.mx-ul-2 {
        margin-left: .5rem!important
    }

    .m-ul-3 {
        margin: 1rem!important
    }

    .mt-ul-3,.my-ul-3 {
        margin-top: 1rem!important
    }

    .mr-ul-3,.mx-ul-3 {
        margin-right: 1rem!important
    }

    .mb-ul-3,.my-ul-3 {
        margin-bottom: 1rem!important
    }

    .ml-ul-3,.mx-ul-3 {
        margin-left: 1rem!important
    }

    .m-ul-4 {
        margin: 1.5rem!important
    }

    .mt-ul-4,.my-ul-4 {
        margin-top: 1.5rem!important
    }

    .mr-ul-4,.mx-ul-4 {
        margin-right: 1.5rem!important
    }

    .mb-ul-4,.my-ul-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-ul-4,.mx-ul-4 {
        margin-left: 1.5rem!important
    }

    .m-ul-5 {
        margin: 3rem!important
    }

    .mt-ul-5,.my-ul-5 {
        margin-top: 3rem!important
    }

    .mr-ul-5,.mx-ul-5 {
        margin-right: 3rem!important
    }

    .mb-ul-5,.my-ul-5 {
        margin-bottom: 3rem!important
    }

    .ml-ul-5,.mx-ul-5 {
        margin-left: 3rem!important
    }

    .p-ul-0 {
        padding: 0!important
    }

    .pt-ul-0,.py-ul-0 {
        padding-top: 0!important
    }

    .pr-ul-0,.px-ul-0 {
        padding-right: 0!important
    }

    .pb-ul-0,.py-ul-0 {
        padding-bottom: 0!important
    }

    .pl-ul-0,.px-ul-0 {
        padding-left: 0!important
    }

    .p-ul-1 {
        padding: .25rem!important
    }

    .pt-ul-1,.py-ul-1 {
        padding-top: .25rem!important
    }

    .pr-ul-1,.px-ul-1 {
        padding-right: .25rem!important
    }

    .pb-ul-1,.py-ul-1 {
        padding-bottom: .25rem!important
    }

    .pl-ul-1,.px-ul-1 {
        padding-left: .25rem!important
    }

    .p-ul-2 {
        padding: .5rem!important
    }

    .pt-ul-2,.py-ul-2 {
        padding-top: .5rem!important
    }

    .pr-ul-2,.px-ul-2 {
        padding-right: .5rem!important
    }

    .pb-ul-2,.py-ul-2 {
        padding-bottom: .5rem!important
    }

    .pl-ul-2,.px-ul-2 {
        padding-left: .5rem!important
    }

    .p-ul-3 {
        padding: 1rem!important
    }

    .pt-ul-3,.py-ul-3 {
        padding-top: 1rem!important
    }

    .pr-ul-3,.px-ul-3 {
        padding-right: 1rem!important
    }

    .pb-ul-3,.py-ul-3 {
        padding-bottom: 1rem!important
    }

    .pl-ul-3,.px-ul-3 {
        padding-left: 1rem!important
    }

    .p-ul-4 {
        padding: 1.5rem!important
    }

    .pt-ul-4,.py-ul-4 {
        padding-top: 1.5rem!important
    }

    .pr-ul-4,.px-ul-4 {
        padding-right: 1.5rem!important
    }

    .pb-ul-4,.py-ul-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-ul-4,.px-ul-4 {
        padding-left: 1.5rem!important
    }

    .p-ul-5 {
        padding: 3rem!important
    }

    .pt-ul-5,.py-ul-5 {
        padding-top: 3rem!important
    }

    .pr-ul-5,.px-ul-5 {
        padding-right: 3rem!important
    }

    .pb-ul-5,.py-ul-5 {
        padding-bottom: 3rem!important
    }

    .pl-ul-5,.px-ul-5 {
        padding-left: 3rem!important
    }

    .m-ul-auto {
        margin: auto!important
    }

    .mt-ul-auto,.my-ul-auto {
        margin-top: auto!important
    }

    .mr-ul-auto,.mx-ul-auto {
        margin-right: auto!important
    }

    .mb-ul-auto,.my-ul-auto {
        margin-bottom: auto!important
    }

    .ml-ul-auto,.mx-ul-auto {
        margin-left: auto!important
    }

    .text-ul-left {
        text-align: left!important
    }

    .text-ul-right {
        text-align: right!important
    }

    .text-ul-center {
        text-align: center!important
    }
}

.spinner,a.back {
    text-align: center
}

.text-lowercase {
    text-transform: lowercase!important
}

.text-uppercase {
    text-transform: uppercase!important
}

.text-capitalize {
    text-transform: capitalize!important
}

.filter .genres .selected,a.back {
    text-transform: lowercase
}

.font-weight-light {
    font-weight: 300!important
}

.font-weight-normal {
    font-weight: 400!important
}

.font-weight-bold {
    font-weight: 700!important
}

.font-italic {
    font-style: italic!important
}

.text-white {
    color: #fff!important
}

.text-primary {
    color: #ff5c57!important
}

a.text-primary:focus,a.text-primary:hover {
    color: #ff2b24!important
}

.text-secondary {
    color: #868e96!important
}

a.text-secondary:focus,a.text-secondary:hover {
    color: #6c757d!important
}

.text-success {
    color: #28a745!important
}

a.text-success:focus,a.text-success:hover {
    color: #1e7e34!important
}

.text-info {
    color: #17a2b8!important
}

a.text-info:focus,a.text-info:hover {
    color: #117a8b!important
}

.text-warning {
    color: #ffc107!important
}

a.text-warning:focus,a.text-warning:hover {
    color: #d39e00!important
}

.text-danger {
    color: #dc3545!important
}

a.text-danger:focus,a.text-danger:hover {
    color: #bd2130!important
}

.text-light {
    color: #f8f9fa!important
}

a.text-light:focus,a.text-light:hover {
    color: #dae0e5!important
}

.text-dark {
    color: #343a40!important
}

a.text-dark:focus,a.text-dark:hover {
    color: #1d2124!important
}

.text-muted {
    color: #868e96!important
}

.text-hide {
    font: 0/0 a;
    color: transparent;
    background-color: transparent;
    border: 0
}

.visible {
    visibility: visible!important
}

.invisible {
    visibility: hidden!important
}

.list-group-item-small {
    padding: .375rem .625rem
}

.btn-primary-light {
    color: #111;
    background-color: #f9eaea;
    border-color: #f9eaea;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-primary-light:hover {
    color: #111;
    background-color: #f1cccc;
    border-color: #eec2c2
}

.btn-primary-light.focus,.btn-primary-light:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(249,234,234,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(249,234,234,.5)
}

.btn-primary-light.disabled,.btn-primary-light:disabled {
    background-color: #f9eaea;
    border-color: #f9eaea
}

.btn-primary-light:not([disabled]):not(.disabled).active,.btn-primary-light:not([disabled]):not(.disabled):active,.show>.btn-primary-light.dropdown-toggle {
    color: #111;
    background-color: #eec2c2;
    border-color: #ebb8b8;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(249,234,234,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(249,234,234,.5)
}

.btn {
    position: relative;
    z-index: 1
}

.btn-group-lg>.btn .icon,.btn-lg .icon {
    width: 1.25rem;
    height: 1.25rem
}

.btn-group-sm>.btn .icon,.btn-sm .icon {
    width: .875rem;
    height: .875rem;
    margin-bottom: .03rem
}

.btn-primary.dropdown-toggle-split {
    border-left-color: rgba(255,255,255,.5)
}

.btn-muted {
    color: #868e96
}

.btn-muted:hover {
    color: #212529
}

.btn-gray-light {
    color: #ced4da
}

.btn-gray-light:hover {
    color: #bfc7cf
}

.btn-o-4 {
    color: rgba(0,0,0,.4)
}

.btn-o-4:hover {
    color: #212529
}

.btn-o-4.disabled,.btn-o-4:disabled {
    cursor: not-allowed;
    opacity: .65;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn-white {
    color: #111;
    background-color: #fff;
    border-color: #e6e6e6;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-white:hover {
    color: #111;
    background-color: #ececec;
    border-color: #ccc
}

.btn-white.focus,.btn-white:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(230,230,230,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(230,230,230,.5)
}

.btn-white.disabled,.btn-white:disabled {
    background-color: #fff;
    border-color: #e6e6e6
}

.btn-white:not([disabled]):not(.disabled).active,.btn-white:not([disabled]):not(.disabled):active,.show>.btn-white.dropdown-toggle {
    color: #111;
    background-color: #e6e6e6;
    border-color: #c6c6c6;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(230,230,230,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(230,230,230,.5)
}

.btn-review {
    color: #111;
    background-color: #f0f0f0;
    border-color: #ccc;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.btn-review:hover {
    color: #111;
    background-color: #ddd;
    border-color: #b3b3b3
}

.btn-review.focus,.btn-review:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(204,204,204,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(204,204,204,.5)
}

.btn-review.disabled,.btn-review:disabled {
    background-color: #f0f0f0;
    border-color: #ccc
}

.btn-review:not([disabled]):not(.disabled).active,.btn-review:not([disabled]):not(.disabled):active,.show>.btn-review.dropdown-toggle {
    color: #111;
    background-color: #d7d7d7;
    border-color: #acacac;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(204,204,204,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(204,204,204,.5)
}

.mw-25 {
    max-width: 25%!important
}

.mw-50 {
    max-width: 50%!important
}

.mw-60 {
    max-width: 60%!important
}

.mw-70 {
    max-width: 70%!important
}

.mw-75 {
    max-width: 75%!important
}

.width-1 {
    width: 1%!important
}

.font-weight-3 {
    font-weight: 300
}

.font-weight-500 {
    font-weight: 500
}

.font-weight-600 {
    font-weight: 600
}

.text-gray-dark-1 {
    color: rgba(0,0,0,.1)
}

.text-gray-dark-2 {
    color: rgba(0,0,0,.2)
}

.text-gray-dark-3 {
    color: rgba(0,0,0,.3)
}

.text-gray-dark-4 {
    color: rgba(0,0,0,.4)
}

.text-gray-dark-5 {
    color: rgba(0,0,0,.5)
}

.text-gray-dark-6 {
    color: rgba(0,0,0,.6)
}

.text-gray-dark-7 {
    color: rgba(0,0,0,.7)
}

.text-gray-dark-8 {
    color: rgba(0,0,0,.8)
}

.text-gray-dark.disabled,.text-primary.disabled {
    cursor: not-allowed;
    opacity: .65
}

.small .icon,.small.icon,small .icon,small.icon {
    width: .8rem;
    height: .8rem
}

.initialism .icon {
    width: .9rem;
    height: .9rem
}

.tooltip {
    font-size: .7rem
}

.tooltip-icon {
    position: relative;
    cursor: default
}

.tooltip-icon:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.b-tooltipped {
    color: #212529;
    border-bottom: 1px dashed #bbb;
    line-height: 1.1;
    cursor: default
}

.b-tooltipped:hover {
    color: #212529;
    text-decoration: none
}

.dropdown-menu-sm {
    padding: 5px 0
}

.modal.loading .modal-body {
    min-height: 100px
}

.popover-user {
    width: 338px
}

.media-body {
    min-width: 0
}

.text-placeholder-4::-webkit-input-placeholder {
    color: rgba(0,0,0,.4)
}

.text-placeholder-4::-moz-placeholder {
    color: rgba(0,0,0,.4)
}

.text-placeholder-4:-ms-input-placeholder {
    color: rgba(0,0,0,.4)
}

.text-placeholder-4:-moz-placeholder {
    color: rgba(0,0,0,.4)
}

.form-control.small {
    font-size: 80%
}

.form-control-reset {
    border: 0;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none
}

.form-control-reset:focus {
    -webkit-box-shadow: none;
    box-shadow: none
}

@media (max-width: 767px) {
    .popover {
        max-width:310px
    }

    .table-responsive2 thead,[data-label]>span {
        display: none
    }

    [data-label]:before {
        content: attr(data-label)
    }
}

.custom-file-control {
    background-color: #e9ecef;
    border: 1px solid #ced4da
}

.card-header.type2:before,.navbar.type2>.container:before {
    content: '';
    height: 100%;
    top: 0;
    background-color: #ff5c57;
    right: 100%
}

.card-link:focus,.card-link:hover {
    text-decoration: none
}

.card-header.type2 {
    position: relative;
    overflow: hidden
}

.card-header.type2:before {
    position: absolute;
    width: 55%;
    left: -5%;
    margin-right: -50%;
    -webkit-transform: skewX(-30deg);
    -ms-transform: skewX(-30deg);
    transform: skewX(-30deg)
}

.card-header.type2 .card-title,.navbar.type2>.container {
    position: relative
}

.navbar.type2>.container:before {
    position: absolute;
    width: 100%;
    margin-right: -115px;
    -webkit-transform: skewX(-30deg);
    -ms-transform: skewX(-30deg);
    transform: skewX(-30deg)
}

.ispinner,.navbar.type2>.container .navbar-brand {
    position: relative
}

@media (max-width: 767px) {
    .table-responsive2 tbody tr+tr {
        border-top:1px solid #e9ecef
    }

    .table-responsive2 tbody td {
        border: 0;
        padding-top: .375rem;
        padding-bottom: .375rem
    }

    .table-responsive2 tbody td[data-label]:before {
        content: attr(data-label);
        display: inline-block;
        margin-right: .5rem;
        font-weight: 700
    }

    .table-responsive2 tbody .table-100 {
        width: 100%;
        float: right;
        padding-right: 0
    }
}

.ispinner {
    width: 20px;
    height: 20px
}

.ispinner .ispinner__blade {
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 10%;
    height: 25%;
    border-radius: 50%/20%;
    -webkit-animation: ispinner__blade--fade 1s linear infinite;
    animation: ispinner__blade--fade 1s linear infinite;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
    background-color: #8C8C8C
}

.ispinner .ispinner__blade:nth-child(1) {
    -webkit-animation-delay: -1.66667s;
    animation-delay: -1.66667s;
    -webkit-transform: rotate(30deg) translate(0,-150%);
    -ms-transform: rotate(30deg) translate(0,-150%);
    transform: rotate(30deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(2) {
    -webkit-animation-delay: -1.58333s;
    animation-delay: -1.58333s;
    -webkit-transform: rotate(60deg) translate(0,-150%);
    -ms-transform: rotate(60deg) translate(0,-150%);
    transform: rotate(60deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(3) {
    -webkit-animation-delay: -1.5s;
    animation-delay: -1.5s;
    -webkit-transform: rotate(90deg) translate(0,-150%);
    -ms-transform: rotate(90deg) translate(0,-150%);
    transform: rotate(90deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(4) {
    -webkit-animation-delay: -1.41667s;
    animation-delay: -1.41667s;
    -webkit-transform: rotate(120deg) translate(0,-150%);
    -ms-transform: rotate(120deg) translate(0,-150%);
    transform: rotate(120deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(5) {
    -webkit-animation-delay: -1.33333s;
    animation-delay: -1.33333s;
    -webkit-transform: rotate(150deg) translate(0,-150%);
    -ms-transform: rotate(150deg) translate(0,-150%);
    transform: rotate(150deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(6) {
    -webkit-animation-delay: -1.25s;
    animation-delay: -1.25s;
    -webkit-transform: rotate(180deg) translate(0,-150%);
    -ms-transform: rotate(180deg) translate(0,-150%);
    transform: rotate(180deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(7) {
    -webkit-animation-delay: -1.16667s;
    animation-delay: -1.16667s;
    -webkit-transform: rotate(210deg) translate(0,-150%);
    -ms-transform: rotate(210deg) translate(0,-150%);
    transform: rotate(210deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(8) {
    -webkit-animation-delay: -1.08333s;
    animation-delay: -1.08333s;
    -webkit-transform: rotate(240deg) translate(0,-150%);
    -ms-transform: rotate(240deg) translate(0,-150%);
    transform: rotate(240deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(9) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    -webkit-transform: rotate(270deg) translate(0,-150%);
    -ms-transform: rotate(270deg) translate(0,-150%);
    transform: rotate(270deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(10) {
    -webkit-animation-delay: -.91667s;
    animation-delay: -.91667s;
    -webkit-transform: rotate(300deg) translate(0,-150%);
    -ms-transform: rotate(300deg) translate(0,-150%);
    transform: rotate(300deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(11) {
    -webkit-animation-delay: -.83333s;
    animation-delay: -.83333s;
    -webkit-transform: rotate(330deg) translate(0,-150%);
    -ms-transform: rotate(330deg) translate(0,-150%);
    transform: rotate(330deg) translate(0,-150%)
}

.ispinner .ispinner__blade:nth-child(12) {
    -webkit-animation-delay: -.75s;
    animation-delay: -.75s;
    -webkit-transform: rotate(360deg) translate(0,-150%);
    -ms-transform: rotate(360deg) translate(0,-150%);
    transform: rotate(360deg) translate(0,-150%)
}

.ispinner.ispinner--animating .ispinner__blade {
    -webkit-animation-play-state: running;
    animation-play-state: running
}

@-webkit-keyframes ispinner__blade--fade {
    0% {
        opacity: .85
    }

    100%,50% {
        opacity: .25
    }
}

@keyframes ispinner__blade--fade {
    0% {
        opacity: .85
    }

    100%,50% {
        opacity: .25
    }
}

.sk-circle {
    width: 28px;
    height: 28px;
    position: relative
}

.sk-circle .sk-child {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0
}

.sk-circle .sk-child:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
    animation: sk-circleBounceDelay 1.2s infinite ease-in-out both
}

.sk-circle .sk-circle2 {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg)
}

.sk-circle .sk-circle3 {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg)
}

.sk-circle .sk-circle4 {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

.sk-circle .sk-circle5 {
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg)
}

.sk-circle .sk-circle6 {
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg)
}

.sk-circle .sk-circle7 {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.sk-circle .sk-circle8 {
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg)
}

.sk-circle .sk-circle9 {
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg)
}

.sk-circle .sk-circle10 {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg)
}

.sk-circle .sk-circle11 {
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg)
}

.sk-circle .sk-circle12 {
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg)
}

.sk-circle .sk-circle2:before {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s
}

.sk-circle .sk-circle3:before {
    -webkit-animation-delay: -1s;
    animation-delay: -1s
}

.sk-circle .sk-circle4:before {
    -webkit-animation-delay: -.9s;
    animation-delay: -.9s
}

.sk-circle .sk-circle5:before {
    -webkit-animation-delay: -.8s;
    animation-delay: -.8s
}

.sk-circle .sk-circle6:before {
    -webkit-animation-delay: -.7s;
    animation-delay: -.7s
}

.sk-circle .sk-circle7:before {
    -webkit-animation-delay: -.6s;
    animation-delay: -.6s
}

.sk-circle .sk-circle8:before {
    -webkit-animation-delay: -.5s;
    animation-delay: -.5s
}

.sk-circle .sk-circle9:before {
    -webkit-animation-delay: -.4s;
    animation-delay: -.4s
}

.sk-circle .sk-circle10:before {
    -webkit-animation-delay: -.3s;
    animation-delay: -.3s
}

.sk-circle .sk-circle11:before {
    -webkit-animation-delay: -.2s;
    animation-delay: -.2s
}

.sk-circle .sk-circle12:before {
    -webkit-animation-delay: -.1s;
    animation-delay: -.1s
}

@-webkit-keyframes sk-circleBounceDelay {
    0%,100%,80% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes sk-circleBounceDelay {
    0%,100%,80% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.uloader {
    border: 3px solid rgba(255,92,87,.4);
    border-top: 3px solid rgba(255,92,87,.8);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    -webkit-animation: uloader-rotate .8s infinite linear;
    animation: uloader-rotate .8s infinite linear;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
    z-index: 110
}

.uloader-xs {
    width: 35px;
    height: 35px
}

.uloader-lg {
    width: 50px;
    height: 50px
}

.uloader-xl {
    border: 5px solid rgba(255,92,87,.4);
    border-top: 5px solid rgba(255,92,87,.8);
    width: 100px;
    height: 100px
}

@-webkit-keyframes uloader-rotate {
    from {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}

@keyframes uloader-rotate {
    from {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}

.spinner {
    margin: 10px auto 0;
    width: 70px
}

.navbar .navbar-nav .nav-item+.nav-item,.navbar .navbar-nav .nav-link+.nav-link {
    margin-left: 0
}

.spinner>div {
    width: 18px;
    height: 18px;
    background-color: #ff5c57;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both
}

.spinner .bounce1 {
    -webkit-animation-delay: -.32s;
    animation-delay: -.32s
}

.spinner .bounce2 {
    -webkit-animation-delay: -.16s;
    animation-delay: -.16s
}

@-webkit-keyframes sk-bouncedelay {
    0%,100%,80% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes sk-bouncedelay {
    0%,100%,80% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.button-loader {
    -webkit-animation: spin .7s infinite linear;
    animation: spin .7s infinite linear
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: scale(1) rotate(0);
        transform: scale(1) rotate(0)
    }

    to {
        -webkit-transform: scale(1) rotate(360deg);
        transform: scale(1) rotate(360deg)
    }
}

@keyframes spin {
    from {
        -webkit-transform: scale(1) rotate(0);
        transform: scale(1) rotate(0)
    }

    to {
        -webkit-transform: scale(1) rotate(360deg);
        transform: scale(1) rotate(360deg)
    }
}

.loader-btn .spinner {
    margin: 0
}

.loader-btn .spinner>div {
    width: 12px;
    height: 12px
}

.lds-spinner.lds-spinner-owl-carousel {
    width: 60px;
    height: 60px
}

.lds-spinner.lds-spinner-owl-carousel i {
    height: 13px;
    -webkit-transform-origin: 1px 29px;
    -ms-transform-origin: 1px 29px;
    transform-origin: 1px 29px
}

.lazy[data-was-processed=true] .lds-spinner,.owl-loaded+.lds-spinner,.tns-outer+.lds-spinner {
    display: none
}

.lds-spinner,.lds-spinner i {
    display: block;
    position: absolute
}

.lds-spinner {
    left: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    z-index: 2;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.lds-spinner i {
    left: 19px;
    top: 0;
    width: 3px;
    height: 8px;
    background: #ccc;
    -webkit-animation: lds-spinner linear 1s infinite;
    animation: lds-spinner linear 1s infinite;
    -webkit-transform-origin: 1px 20px;
    -ms-transform-origin: 1px 20px;
    transform-origin: 1px 20px
}

.img-square,.lazy:not(img),.owl-lazy:not(img),.tns-item .anime-grid-lazy:not(img) {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover
}

.lds-spinner i:nth-child(1) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-animation-delay: -.917s;
    animation-delay: -.917s
}

.lds-spinner i:nth-child(2) {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
    -webkit-animation-delay: -.833s;
    animation-delay: -.833s
}

.lds-spinner i:nth-child(3) {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-animation-delay: -.75s;
    animation-delay: -.75s
}

.lds-spinner i:nth-child(4) {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation-delay: -.667s;
    animation-delay: -.667s
}

.lds-spinner i:nth-child(5) {
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
    -webkit-animation-delay: -.583s;
    animation-delay: -.583s
}

.lds-spinner i:nth-child(6) {
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);
    -webkit-animation-delay: -.5s;
    animation-delay: -.5s
}

.lds-spinner i:nth-child(7) {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation-delay: -.417s;
    animation-delay: -.417s
}

.lds-spinner i:nth-child(8) {
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg);
    -webkit-animation-delay: -.333s;
    animation-delay: -.333s
}

.lds-spinner i:nth-child(9) {
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);
    -webkit-animation-delay: -.25s;
    animation-delay: -.25s
}

.lds-spinner i:nth-child(10) {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    -webkit-animation-delay: -.167s;
    animation-delay: -.167s
}

.lds-spinner i:nth-child(11) {
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg);
    -webkit-animation-delay: -83ms;
    animation-delay: -83ms
}

.lds-spinner i:nth-child(12) {
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg);
    -webkit-animation-delay: 0s;
    animation-delay: 0s
}

@-webkit-keyframes lds-spinner {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

@keyframes lds-spinner {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.icon {
    vertical-align: -.125em;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: relative;
    fill: currentColor
}

.icon-lg {
    width: 1.25rem;
    height: 1.25rem
}

.icon-xl {
    width: 1.5rem;
    height: 1.5rem
}

.icon-ul {
    width: 1.75rem;
    height: 1.75rem
}

.notifi-list .dropdown-menu {
    width: 430px;
    padding: 0
}

.notifi-list .delete {
    font-size: 87%
}

.notifi-list .list-group {
    max-height: 284px
}

.notifi-list .list-group-item-title {
    position: absolute;
    top: -14px;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0);
    background-color: #fff;
    padding: 0 10px
}

.notifi-list .card-title {
    margin-top: .75rem
}

.notifi-list .controls {
    position: absolute;
    top: 10%;
    right: 5%
}

.notifi-list .controls>span {
    opacity: 0
}

.notifi-list .controls>span.disabled {
    opacity: .65!important
}

.notifi-list .controls .alert-success {
    border: none;
    background-color: transparent
}

.notifi-list .list-group-item-action:hover .controls>span {
    opacity: 1
}

.notifi-list .icon-group {
    width: 1.4rem;
    height: 1.4rem
}

.notifi-list .nav-link {
    position: relative;
    z-index: 1
}

.navbar.navbar-dark {
    border-bottom: 3px solid
}

.navbar .nav-link,.navbar .navbar-brand {
    font-weight: 300
}

.navbar .navbar-nav .nav-item {
    transition: all .2s ease-in-out
}

.navbar .navbar-nav .nav-item.bg.active .nav-link,.navbar .navbar-nav .nav-item.bg:hover:focus,.navbar .navbar-nav .nav-item.bg:hover:hover {
    background-color: #ff5c57
}

.navbar .navbar-nav .nav-link {
    padding: .6rem 1rem;
    transition: all .2s ease-in-out
}

.navbar .navbar-nav .nav-link .icon-vk {
    background-color: #45668e;
    color: #fff;
    padding: 4px;
    border-radius: 3px;
    max-width: 1.5rem;
    max-height: 1.5rem;
    width: 1.5rem;
    height: 1.5rem
}

.navbar .navbar-nav .nav-link .icon-search {
    font-size: 1.1rem
}

.navbar .navbar-nav .nav-link>.notifi {
    position: absolute;
    bottom: 6px;
    right: 5px;
    background-color: #ff5c57;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    text-align: center;
    font-size: 11px
}

.navbar .navbar-nav.login .nav-item+.nav-item {
    position: relative
}

.navbar .navbar-nav.login .nav-item+.nav-item:before {
    content: '';
    border-left: 1px solid rgba(255,255,255,.5);
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    transform: translate(0,-50%)
}

.bg-inverse .nav-link {
    color: #fff
}

.navbar-brand .name {
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    z-index: -1;
    font-size: 0
}

html {
    position: relative;
    min-height: 100%
}

#footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #999
}

#footer a {
    color: #999;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out
}

#footer a:hover {
    color: #fff
}

.footer-push {
    height: 40px;
    margin-top: 100px
}

#wrap {
    background-color: #e9ebee
}

[role=button] {
    user-select: none
}

#avatar,.noUi-target,.noUi-target * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

.popover-card {
    min-width: 350px
}

.line-height-12 {
    line-height: 12px
}

.line-height-13 {
    line-height: 13px
}

.line-height-14 {
    line-height: 14px
}

.line-height-15 {
    line-height: 15px
}

.line-height-16 {
    line-height: 16px
}

.line-height-17 {
    line-height: 17px
}

.line-height-18 {
    line-height: 18px
}

.line-height-19 {
    line-height: 19px
}

.line-height-20 {
    line-height: 20px
}

.img-square {
    padding-bottom: 100%;
    width: 100%;
    height: 0
}

a.back {
    text-decoration: none;
    line-height: 10px
}

.cursor-pointer,[role=button] {
    cursor: pointer
}

.content {
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125)
}

.line-primary-1,.line-primary-2,.line-primary-3,.line-primary-4,.line-primary-5,.line-primary-6,.line-primary-7,.line-primary-8 {
    background-color: #ff5c57
}

@media (max-width: 767px) {
    .content-block {
        padding-left:0!important;
        padding-right: 0!important;
        margin-left: 0!important;
        margin-right: 0!important
    }
}

strong {
    font-weight: 600
}

.wh-1 {
    width: 2.5rem!important;
    height: 2.5rem!important
}

.wh-2 {
    width: 2rem!important;
    height: 2rem!important
}

.wh-3 {
    width: 1.75rem!important;
    height: 1.75rem!important
}

.wh-4 {
    width: 1.5rem!important;
    height: 1.5rem!important
}

.wh-5 {
    width: 1.25rem!important;
    height: 1.25rem!important
}

.wh-6 {
    width: 1rem!important;
    height: 1rem!important
}

.box-shadow-none {
    -webkit-box-shadow: none;
    box-shadow: none
}

.resize-none {
    resize: none
}

.bb-dashed-1 {
    border-bottom: 1px dashed
}

.bb-dashed-1:focus,.bb-dashed-1:hover {
    text-decoration: none;
    border-bottom-color: transparent
}

.mirror-x {
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1)
}

.mirror-y {
    -webkit-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    transform: scaleY(-1)
}

.cover-control,.unread-messages {
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0)
}

input::-ms-clear {
    display: none
}

.form-check-input-small {
    margin-top: .2rem
}

.transition-15 {
    -webkit-transition: all .15s;
    -o-transition: all .15s;
    transition: all .15s
}

.scroll-container {
    overflow-x: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch
}

.overflow-h,.scroll {
    overflow: hidden
}

.line-primary-1 {
    height: 1px
}

.line-primary-2 {
    height: 2px
}

.line-primary-3 {
    height: 3px
}

.line-primary-4 {
    height: 4px
}

.line-primary-5 {
    height: 5px
}

.line-primary-6 {
    height: 6px
}

.line-primary-7 {
    height: 7px
}

.line-primary-8 {
    height: 8px
}

.anime-grid-lazy:not(img) {
    background-repeat: no-repeat
}

.brand-primary-light {
    background-color: #f9eaea;
    color: #111
}

.br-50 {
    border-radius: 50%
}

.br-25 {
    border-radius: 25px
}

.br-tr-25 {
    border-top-right-radius: 25px
}

.br-tl-25 {
    border-top-left-radius: 25px
}

.br-br-25 {
    border-bottom-right-radius: 25px
}

.br-bl-25 {
    border-bottom-left-radius: 25px
}

.br-1 {
    border-radius: 1px
}

.br-tr-1 {
    border-top-right-radius: 1px
}

.br-tl-1 {
    border-top-left-radius: 1px
}

.br-br-1 {
    border-bottom-right-radius: 1px
}

.br-bl-1 {
    border-bottom-left-radius: 1px
}

.br-2 {
    border-radius: 2px
}

.br-tr-2 {
    border-top-right-radius: 2px
}

.br-tl-2 {
    border-top-left-radius: 2px
}

.br-br-2 {
    border-bottom-right-radius: 2px
}

.br-bl-2 {
    border-bottom-left-radius: 2px
}

.br-3 {
    border-radius: 3px
}

.br-tr-3 {
    border-top-right-radius: 3px
}

.br-tl-3 {
    border-top-left-radius: 3px
}

.br-br-3 {
    border-bottom-right-radius: 3px
}

.br-bl-3 {
    border-bottom-left-radius: 3px
}

.br-4 {
    border-radius: 4px
}

.br-tr-4 {
    border-top-right-radius: 4px
}

.br-tl-4 {
    border-top-left-radius: 4px
}

.br-br-4 {
    border-bottom-right-radius: 4px
}

.br-bl-4 {
    border-bottom-left-radius: 4px
}

.bo-1 {
    border: 1px solid rgba(0,0,0,.1)
}

.bo-t-1 {
    border-top: 1px solid rgba(0,0,0,.1)
}

.bo-b-1 {
    border-bottom: 1px solid rgba(0,0,0,.1)
}

.bo-l-1 {
    border-left: 1px solid rgba(0,0,0,.1)
}

.bo-r-1 {
    border-right: 1px solid rgba(0,0,0,.1)
}

.bo-2 {
    border: 1px solid rgba(0,0,0,.2)
}

.bo-t-2 {
    border-top: 1px solid rgba(0,0,0,.2)
}

.bo-b-2 {
    border-bottom: 1px solid rgba(0,0,0,.2)
}

.bo-l-2 {
    border-left: 1px solid rgba(0,0,0,.2)
}

.bo-r-2 {
    border-right: 1px solid rgba(0,0,0,.2)
}

.bo-3 {
    border: 1px solid rgba(0,0,0,.3)
}

.bo-t-3 {
    border-top: 1px solid rgba(0,0,0,.3)
}

.bo-b-3 {
    border-bottom: 1px solid rgba(0,0,0,.3)
}

.bo-l-3 {
    border-left: 1px solid rgba(0,0,0,.3)
}

.bo-r-3 {
    border-right: 1px solid rgba(0,0,0,.3)
}

.bo-4 {
    border: 1px solid rgba(0,0,0,.4)
}

.bo-t-4 {
    border-top: 1px solid rgba(0,0,0,.4)
}

.bo-b-4 {
    border-bottom: 1px solid rgba(0,0,0,.4)
}

.bo-l-4 {
    border-left: 1px solid rgba(0,0,0,.4)
}

.bo-r-4 {
    border-right: 1px solid rgba(0,0,0,.4)
}

.bo-5 {
    border: 1px solid rgba(0,0,0,.5)
}

.bo-t-5 {
    border-top: 1px solid rgba(0,0,0,.5)
}

.bo-b-5 {
    border-bottom: 1px solid rgba(0,0,0,.5)
}

.bo-l-5 {
    border-left: 1px solid rgba(0,0,0,.5)
}

.bo-r-5 {
    border-right: 1px solid rgba(0,0,0,.5)
}

.bo-6 {
    border: 1px solid rgba(0,0,0,.6)
}

.bo-t-6 {
    border-top: 1px solid rgba(0,0,0,.6)
}

.bo-b-6 {
    border-bottom: 1px solid rgba(0,0,0,.6)
}

.bo-l-6 {
    border-left: 1px solid rgba(0,0,0,.6)
}

.bo-r-6 {
    border-right: 1px solid rgba(0,0,0,.6)
}

.bo-7 {
    border: 1px solid rgba(0,0,0,.7)
}

.bo-t-7 {
    border-top: 1px solid rgba(0,0,0,.7)
}

.bo-b-7 {
    border-bottom: 1px solid rgba(0,0,0,.7)
}

.bo-l-7 {
    border-left: 1px solid rgba(0,0,0,.7)
}

.bo-r-7 {
    border-right: 1px solid rgba(0,0,0,.7)
}

.bo-8 {
    border: 1px solid rgba(0,0,0,.8)
}

.bo-t-8 {
    border-top: 1px solid rgba(0,0,0,.8)
}

.bo-b-8 {
    border-bottom: 1px solid rgba(0,0,0,.8)
}

.bo-l-8 {
    border-left: 1px solid rgba(0,0,0,.8)
}

.bo-r-8 {
    border-right: 1px solid rgba(0,0,0,.8)
}

.text-link-gray {
    color: #212529
}

.text-link-gray:hover {
    text-decoration: none;
    color: #ff5c57
}

.text-underline,.text-underline-hover:hover {
    text-decoration: underline
}

#video-player .video-player-toggle-item.video-player__active .video-player-toggle-item-name:focus,#video-player .video-player-toggle-item.video-player__active .video-player-toggle-item-name:hover,#video-player .video-player-toggle-item.video-player__active:focus,#video-player .video-player-toggle-item.video-player__active:hover,#video-player-bar-menu .video-player-toggle-item.video-player__active .video-player-toggle-item-name:focus,#video-player-bar-menu .video-player-toggle-item.video-player__active .video-player-toggle-item-name:hover,#video-player-bar-menu .video-player-toggle-item.video-player__active:focus,#video-player-bar-menu .video-player-toggle-item.video-player__active:hover,.anime-popover .description .read-more-link:focus,.anime-popover .description .read-more-link:hover,.anime-tags .anime-tag,.review .read-more-link:focus,.review .read-more-link:hover,.searchsuggestions .ajax-search-results-item>a,.seasons .read-more-link:focus,.seasons .read-more-link:hover,.synonyms .read-more-link:focus,.synonyms .read-more-link:hover,.text__underline .text__underline__link:hover {
    text-decoration: none
}

.ml-minus-1 {
    margin-left: -1px!important
}

.mt-minus-1 {
    margin-top: -1px!important
}

.mr-minus-1 {
    margin-right: -1px!important
}

.form-group.has-error .help-block>ul {
    margin-top: 5px;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid #ffeeba;
    border-radius: 2px;
    color: #856404;
    background-color: #fff3cd
}

.form-group.has-error .help-block>ul hr {
    border-top-color: #ffe8a1
}

.form-group.has-error .help-block>ul .alert-link {
    color: #533f03
}

.ui-pnotify .glyphicon-exclamation-sign,.ui-pnotify .glyphicon-ok-sign {
    font-size: 1.75rem
}

.online-indicator {
    border: 3px solid #28a745
}

.scroll {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch
}

.d-block.loaded {
    position: static
}

.btn-disabled.disabled,.btn-disabled:disabled {
    cursor: not-allowed;
    opacity: .65;
    -webkit-box-shadow: none;
    box-shadow: none
}

.text__underline:hover .text__underline__link {
    border-bottom: 2px solid
}

.searchsuggestions {
    z-index: 1060;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    min-width: 300px;
    margin: 2px 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2px;
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.175);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.175)
}

.anime-popover .description .read-more,.mobile-panel-menu .notifi,.noUi-tooltip,.noUi-value,.read-more-theme-cursor-one .read-more,.review .read-more,.seasons .read-more,.soc-container .soc {
    text-align: center
}

.searchsuggestions .ajax-search-results .notfound {
    display: block;
    padding-top: 15px;
    padding-bottom: 15px
}

.searchsuggestions .ajax-search-results-item {
    padding-top: 15px;
    padding-bottom: 15px
}

.searchsuggestions .ajax-search-results-item>a {
    display: block
}

.searchsuggestions .ajax-search-results-item:hover {
    background-color: #fdd08b
}

.searchsuggestions .ajax-search-results-title {
    font-size: .9375rem;
    background-color: #ff8e8a;
    display: block;
    font-weight: 700;
    padding: .3125rem;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis
}

.searchsuggestions .ajax-search-results .notfound,.searchsuggestions .ajax-search-results-text {
    font-size: .875rem;
    color: #212529
}

.mini-chat .chat-header>span,.mini-chat-inner>div:not(.small) {
    font-size: 80%;
    font-weight: 400
}

.searchsuggestions.mini-chat-search {
    min-width: auto;
    margin-top: -1px
}

.bg-search {
    background-color: #f6f7f9!important
}

.bg-search::-webkit-input-placeholder {
    color: rgba(0,0,0,.4)
}

.bg-search::-moz-placeholder {
    color: rgba(0,0,0,.4)
}

.bg-search:-ms-input-placeholder {
    color: rgba(0,0,0,.4)
}

.bg-search:-moz-placeholder {
    color: rgba(0,0,0,.4)
}

.form-tokenarea .input-group-addon {
    padding: .4rem .75rem
}

.form-tokenarea .form-control {
    padding: .2rem .75rem
}

.form-tokenarea [data-search=true] {
    line-height: 1.5
}

.uiToken {
    background-color: #f9eaea;
    border: 1px solid #f9eaea;
    border-radius: 2px;
    color: #111;
    display: block;
    float: left;
    margin: 2px 4px 2px 0;
    padding: 1px 3px 1px 6px;
    position: relative
}

.message-tokenarea-input {
    max-width: 320px;
    min-width: 80px;
    padding-right: 40px
}

.search-county {
    border: 1px solid #ff5c57;
    background-color: #ff5c57;
    color: #fff;
    display: inline-block;
    padding: 3px 9px;
    margin: 0 15px;
    border-radius: 5px
}

.search-form {
    background: #f5f5f5;
    padding: 18px;
    -webkit-box-shadow: 0 1px 5px #bdbdbd;
    box-shadow: 0 1px 5px #bdbdbd
}

.chat-list-image,.profile-facebook-header {
    background-size: cover;
    background-repeat: no-repeat
}

.navbar .search {
    display: none;
    position: absolute;
    top: 0;
    right: 96%;
    z-index: 100;
    width: 360px;
    padding-top: .3125rem;
    padding-bottom: .3125rem
}

.navbar #navbar-search .icon-close {
    display: none
}

.navbar .search-open #navbar-search .icon-close {
    display: block
}

.navbar .search-open #navbar-search .icon-search {
    display: none
}

.navbar .search-open .search {
    display: block
}

.result-search-header {
    border-bottom: 3px solid #ff5c57
}

.result-search-item {
    border-top: 1px solid #e5e5e5;
    margin-top: -1px;
    padding: 10px 10px 13px
}

.result-search-item-img img {
    max-width: 50px
}

#search-overlay {
    -webkit-transition: bottom .4s ease .06s,opacity .4s ease .06s;
    -o-transition: bottom .4s ease .06s,opacity .4s ease .06s;
    transition: bottom .4s ease .06s,opacity .4s ease .06s;
    display: none;
    width: 100vw;
    height: 100%;
    bottom: -100vh;
    position: fixed;
    background-color: #fff;
    left: 0
}

#search-overlay[data-state=opened] {
    z-index: 1040;
    opacity: 1;
    display: block;
    bottom: 0
}

#search-scrim.opened {
    height: 100vh;
    width: 100vw;
    opacity: .5;
    background-color: #000;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1030
}

html.search-mobile-open,html.search-mobile-open body {
    overflow: hidden;
    margin: 0;
    height: 100%
}

.chat-container,.chat-footer {
    width: 100%;
    position: absolute
}

.search-mobile .form-control,.search-mobile .form-control input {
    background-color: #f5f5f5
}

html.search-mobile-open {
    position: relative
}

#search-containe-mobile {
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100%
}

.result-message,.search-message {
    background-color: rgba(255,255,255,.95);
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.chat {
    overflow-x: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch
}

.friends-list-item,.profile-info {
    overflow: hidden
}

.chat .offset-4 {
    margin-left: 0!important;
    padding-left: 33.33333%
}

.chat-block-form {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0
}

.chat-textarea {
    resize: none;
    border: none;
    padding-top: 0
}

.chat-controls,.chat-image {
    border-top: 1px solid #ced4da;
    padding: .375rem .75rem
}

.chat-footer {
    bottom: 0;
    left: 0;
    background-color: #fff
}

.chat-list-image {
    background-position: center
}

.chat-file {
    margin: 0 -1px
}

.chat-image .chat-file-remove {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #ced4da;
    border-radius: 50%;
    background-color: #ddd;
    opacity: 0;
    -webkit-transition: opacity .1s;
    -o-transition: opacity .1s;
    transition: opacity .1s
}

.chat-image .list-inline-item:hover .chat-file-remove {
    opacity: 1
}

.chat .separator {
    border-top: 1px solid #e8e8e8
}

.chat .separator abbr {
    background-color: #fff;
    padding: 0 5px;
    position: relative;
    top: -11px
}

.chat-header {
    position: absolute;
    bottom: 100%
}

.chat-message {
    background-color: #e5e4e4;
    padding: 6px 12px
}

.chat-message-radius {
    border-radius: 25px
}

.chat-message-br-4,.chat-message-radius-bottom-right {
    border-bottom-right-radius: 4px
}

.chat-message-bl-4,.chat-message-radius-bottom-left {
    border-bottom-left-radius: 4px
}

.chat-message-radius-top-right {
    border-top-right-radius: 4px
}

.chat-message-radius-top-left {
    border-top-left-radius: 4px
}

.chat-message-primary {
    background-color: #ff5c57;
    color: #fff
}

.chat-message-primary .chat-message-link {
    color: #fff
}

.chat-message-text {
    word-wrap: break-word
}

.chat .seen-block {
    margin-top: -10px
}

@media (max-width: 767px) {
    .chat .mw-70 {
        max-width:100%!important
    }

    .chat .offset-4 {
        padding-left: 10%
    }
}

.unread-messages {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 10
}

.unread-messages .icon {
    border: 1px solid
}

.unread-messages-bg {
    z-index: 10;
    background-color: rgba(98,100,102,.8);
    color: #fff;
    border-radius: 0 0 4px 4px
}

.dialog-list-tag {
    position: absolute;
    right: .75rem;
    top: 65%;
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    transform: translate(0,-50%)
}

.message-typing-container .media-body {
    background-color: #f1f0f0;
    padding: 6px 12px;
    border-radius: 15px;
    -webkit-box-flex: 0;
    -ms-flex: 0;
    flex: 0;
    min-width: auto
}

.message-typing-container .media-left {
    display: none
}

.message-typing-container .message-typing {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 20px
}

.message-typing-container .message-typing-dot {
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;
    display: inline-block;
    height: 6px;
    margin-right: 4px;
    vertical-align: middle;
    width: 6px;
    -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out
}

.message-typing-container .message-typing-dot:nth-child(1) {
    -webkit-animation-delay: .2s;
    animation-delay: .2s
}

.message-typing-container .message-typing-dot:nth-child(2) {
    -webkit-animation-delay: .3s;
    animation-delay: .3s
}

.message-typing-container .message-typing-dot:nth-child(3) {
    -webkit-animation-delay: .4s;
    animation-delay: .4s;
    margin-right: 0
}

@-webkit-keyframes mercuryTypingAnimation {
    0%,44% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    28% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px)
    }
}

.dialog-group-avatar {
    width: 60px;
    height: 60px
}

.dialog-group-avatar .multi-item {
    float: left;
    overflow: hidden
}

.dialog-group-avatar .multi-item:nth-child(1) {
    width: 37px;
    border-right: 1px solid #fff
}

.dialog-group-avatar .multi-item:nth-child(2),.dialog-group-avatar .multi-item:nth-child(3) {
    width: 21px;
    height: 30px
}

.dialog-group-avatar .multi-item:nth-child(1) img {
    margin-left: -8px
}

.dialog-group-avatar .multi-item:nth-child(2) img,.dialog-group-avatar .multi-item:nth-child(3) img {
    margin-left: -4px
}

#chat-block {
    bottom: 0;
    position: fixed;
    right: 30px;
    z-index: 110
}

.mini-chat {
    pointer-events: all;
    width: 260px;
    background-clip: padding-box;
    border-radius: 2px;
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.175);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.175);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-transition: -webkit-transform .3s ease;
    -o-transition: transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease
}

#messages #message-container,.m-dialog-left,.m-dialog-right {
    -webkit-transition: -webkit-transform .4s ease;
    -o-transition: transform .4s ease
}

.mini-chat~.mini-chat.slide-down .nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.mini-chat~.mini-chat.slide-down .chat-panel-expand {
    display: none
}

.mini-chat button[type=submit] {
    display: none!important
}

.mini-chat .offset-4 {
    margin-left: 0!important
}

.mini-chat .list-group {
    max-height: 335px;
    opacity: 1
}

.mini-chat.slide-down {
    -webkit-transform: translate3d(0,88%,0);
    transform: translate3d(0,88%,0)
}

.mini-chat.slide-down .nav {
    display: none
}

.mini-chat.slide-down .chat-panel-expand {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.avatar-preview,.mini-chat .chat-panel-expand {
    display: none
}

.mini-chat .card-header ul {
    margin-right: -10px
}

.mini-chat .card-header h6 {
    line-height: 28px
}

.mini-chat .card-header.hover {
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(29,33,41,.04)),to(rgba(29,33,41,.04)));
    background-image: -o-linear-gradient(rgba(29,33,41,.04),rgba(29,33,41,.04));
    background-image: linear-gradient(rgba(29,33,41,.04),rgba(29,33,41,.04))
}

.mini-chat.chat-panel .mini-chat-inner {
    height: 335px
}

.mini-chat-inner {
    height: 258px;
    background-color: transparent;
    border-radius: 3px 3px 0 0
}

.mini-chat-inner>div:not(.small) .small {
    font-size: 100%
}

.mini-chat-inner .mw-70 {
    max-width: 100%!important
}

.mini-chat-inner .offset-4 {
    padding-left: 10%
}

.mini-chat .chat-textarea {
    font-size: 80%;
    font-weight: 400
}

.mini-chat .form-textarea {
    max-height: 108px
}

.mini-chat.focus .card-header.btn-primary {
    color: #fff;
    background-color: #ff5c57;
    border-color: #ff5c57;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

.mini-chat.focus .card-header.btn-primary:hover {
    color: #fff;
    background-color: #ff3730;
    border-color: #ff2b24
}

.mini-chat.focus .card-header.btn-primary.focus,.mini-chat.focus .card-header.btn-primary:focus {
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,92,87,.5);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .2rem rgba(255,92,87,.5)
}

.mini-chat.focus .card-header.btn-primary.disabled,.mini-chat.focus .card-header.btn-primary:disabled {
    background-color: #ff5c57;
    border-color: #ff5c57
}

.mini-chat.focus .card-header.btn-primary:not([disabled]):not(.disabled).active,.mini-chat.focus .card-header.btn-primary:not([disabled]):not(.disabled):active,.show>.mini-chat.focus .card-header.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #ff2b24;
    border-color: #ff1f17;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(255,92,87,.5);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .2rem rgba(255,92,87,.5)
}

.profile-facebook-header {
    height: 400px;
    background-position: 50% 50%;
    background-color: #333
}

@media (max-width: 991px) {
    .profile-facebook-header {
        height:270px
    }
}

.profile-facebook-avatar {
    margin-top: -121px;
    padding: 1px
}

.profile-facebook-avatar img {
    -webkit-box-shadow: 0 2px 8px 1px rgba(0,0,0,.16);
    box-shadow: 0 2px 8px 1px rgba(0,0,0,.16)
}

.cover-control {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0);
    z-index: 10;
    width: 280px
}

#profile-avatar+.avatar-preview,.cover-custom-file {
    position: absolute;
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0)
}

.cover-custom-file {
    left: 50%;
    transform: translate(-50%,0);
    bottom: 140px;
    z-index: 10;
    max-width: 200px
}

@media (min-width: 768px) {
    .profile-facebook .profile-actions {
        margin-top:-45px;
        position: absolute;
        top: 0;
        right: 0
    }

    .cover-custom-file {
        left: 15px;
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        transform: translate(0,0)
    }
}

#cover .cropper-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5
}

#profile-avatar+.avatar-preview {
    top: 0;
    left: 50%;
    transform: translate(-50%,0)
}

.profile-avatar {
    max-width: 200px;
    max-height: 200px
}

.avatar-control-buttons {
    background-color: rgba(0,0,0,.5);
    height: 38px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.avatar-control-buttons button {
    background-color: transparent;
    border-width: 0;
    color: #fff;
    cursor: pointer;
    padding: 0;
    width: 100%
}

.avatar-control-buttons button:hover {
    background-color: #ff5c57
}

#avatar {
    width: 200px;
    height: 200px;
    position: relative;
    user-select: none;
    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,.1);
    box-shadow: 0 0 0 1px rgba(0,0,0,.1)
}

.avatar-control {
    width: 200px;
    margin: 0 auto
}

.custom-file-input {
    min-width: 100%
}

#avatar .avatar {
    position: absolute;
    top: 0;
    left: 0
}

.online-indicator {
    display: inline-block
}

.online .icon-mobile {
    width: 1.1rem;
    height: 1.1rem
}

.notice span+span:before {
    content: "/"
}

.notification-content .list-group-item {
    padding-right: 40px
}

@media (min-width: 576px) {
    .notification-content .list-group-item {
        padding-right:80px
    }
}

.notification-content .list-group-item-title {
    position: absolute;
    top: -14px;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0);
    background-color: #fff;
    padding: 0 10px
}

.notification-content .controls {
    position: absolute;
    top: 10%;
    right: 5%
}

.notification-content .controls>span {
    opacity: 0
}

.notification-content .controls>span.marker:not(.reappear) {
    opacity: 1
}

.notification-content .controls>span.disabled {
    opacity: .65!important
}

.notification-content .controls .alert-success {
    border: none;
    background-color: transparent
}

.notification-content .list-group-item-action:hover .controls>span {
    opacity: 1
}

.profile-edit-btn {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    display: block;
    background-color: rgba(0,0,0,.5)
}

.profile-edit-btn .icon {
    color: #fff;
    opacity: .8
}

.profile-edit-btn:hover .icon {
    opacity: 1
}

.soc-container .soc-facebook:focus,.soc-container .soc-facebook:hover,.soc-container .soc-gplus:focus,.soc-container .soc-gplus:hover,.soc-container .soc-odnoklassniki:focus,.soc-container .soc-odnoklassniki:hover,.soc-container .soc-twitter:focus,.soc-container .soc-twitter:hover,.soc-container .soc-vkontakte:focus,.soc-container .soc-vkontakte:hover,.soc-container .soc-yandex:focus,.soc-container .soc-yandex:hover {
    opacity: .9
}

.profile-info {
    max-height: 56px
}

.profile-info-small {
    max-height: 40px
}

.profile-info.read-more {
    height: auto
}

.profile-read-more-link {
    border: 1px solid transparent
}

@media (min-width: 576px) {
    .profile-read-more-link.offset-3 {
        padding-left:26.33333%
    }
}

.profile-read-more-link:hover {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    color: #464a4c;
    background-color: #e9ebee;
    border-color: #ddd #ddd #e9ebee
}

.friend-icon,.friend-icon:focus,.friend-icon:hover,.mutual-friend-icon,.mutual-friend-icon:focus,.mutual-friend-icon:hover {
    color: #fff
}

.friends-list {
    margin-left: -.25rem;
    margin-right: -.25rem
}

.friends-list-link {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.7)));
    background: -o-linear-gradient(transparent,rgba(0,0,0,.7));
    background: linear-gradient(transparent,rgba(0,0,0,.7))
}

.message-photos-item,.video-block .video-item {
    background-position: 50% 50%;
    background-size: cover
}

.friends-list-link div {
    color: #fff;
    word-wrap: break-word
}

.friend-icon {
    background-color: #f50e6b
}

.mutual-friend-icon {
    background-color: #54c7ec
}

#profile-menu .card-block {
    margin: -1px
}

.profile-mobile .profile-info+.read-more {
    background-color: #e9ecef;
    border-radius: 2px;
    margin-top: 1rem
}

.stats-graph {
    background-color: #f6f6f6;
    border-radius: 2px;
    display: block;
    height: 18px
}

.stats-graph .graph {
    display: inline-block;
    height: 18px;
    width: 0
}

.stats-graph .graph.watching {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb
}

.stats-graph .graph.watching hr {
    border-top-color: #abdde5
}

.stats-graph .graph.watching .alert-link {
    color: #062c33
}

.stats-graph .graph.completed {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb
}

.stats-graph .graph.completed hr {
    border-top-color: #b1dfbb
}

.stats-graph .graph.completed .alert-link {
    color: #0b2e13
}

.stats-graph .graph.onHold {
    background-color: #ebeef1;
    border-color: #dbe0e6
}

.stats-graph .graph.dropped {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb
}

.stats-graph .graph.dropped hr {
    border-top-color: #f1b0b7
}

.stats-graph .graph.dropped .alert-link {
    color: #491217
}

.stats-graph .graph.planned {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba
}

.stats-graph .graph.planned hr {
    border-top-color: #ffe8a1
}

.stats-graph .graph.planned .alert-link {
    color: #533f03
}

.indicator::before {
    content: '';
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    margin-right: 1rem
}

.chat .msg.justify-content-end .even .message-photos-item:nth-of-type(2n+1),.chat .msg.justify-content-start .even .message-photos-item:nth-of-type(2n+1) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
}

.chat .msg.justify-content-end .even .message-photos-item:nth-of-type(2n),.chat .msg.justify-content-start .even .message-photos-item:nth-of-type(2n) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.chat .msg.justify-content-end .odd .message-photos-item:nth-of-type(2n),.chat .msg.justify-content-end .odd .message-photos-item:nth-of-type(2n+1),.chat .msg.justify-content-start .odd .message-photos-item:nth-of-type(2n),.chat .msg.justify-content-start .odd .message-photos-item:nth-of-type(2n+1) {
    border-radius: 4px
}

.indicator.watching::before {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb
}

.indicator.watching::before hr {
    border-top-color: #abdde5
}

.indicator.watching::before .alert-link {
    color: #062c33
}

.indicator.completed::before {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb
}

.indicator.completed::before hr {
    border-top-color: #b1dfbb
}

.indicator.completed::before .alert-link {
    color: #0b2e13
}

.indicator.onHold::before {
    background-color: #ebeef1;
    border-color: #dbe0e6
}

.indicator.dropped::before {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb
}

.indicator.dropped::before hr {
    border-top-color: #f1b0b7
}

.indicator.dropped::before .alert-link {
    color: #491217
}

.indicator.planned::before {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba
}

.message-form-text,.message-form-text:focus {
    background-color: transparent
}

.indicator.planned::before hr {
    border-top-color: #ffe8a1
}

.indicator.planned::before .alert-link {
    color: #533f03
}

@media (max-width: 991px) {
    .table-responsive2 .indicator::before {
        margin:0
    }
}

.messages .icon-error,.messages .icon-error-outline {
    width: 1.7rem;
    height: 1.7rem
}

@media (max-width: 767px) {
    .messages .chat .offset-4 {
        margin-left:0!important
    }
}

.chat-message {
    min-width: 0
}

.form-placeholder {
    position: absolute;
    z-index: 1
}

.message-form-text {
    position: relative;
    z-index: 1
}

.form-textarea {
    max-height: 144px;
    overflow-y: auto
}

.dialog-list .list-group-item.active {
    background-color: rgba(0,0,0,.05);
    color: currentColor;
    border-color: currentColor
}

.dialog-list .list-group-item:focus {
    background-color: rgba(0,0,0,.15)
}

.message-parameters .list button,.message-people .list button {
    line-height: 41px
}

.message-parameters .list .icon,.message-people .list .icon {
    width: 1.5rem;
    height: 1.5rem
}

.message-photos-item:nth-of-type(3n+1) {
    border-right: 2px solid #fff
}

.message-photos-item:nth-of-type(3n+2) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff
}

.message-photos-item:nth-of-type(3n+3) {
    border-left: 2px solid #fff
}

.message-photos-item {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 3px
}

.message-photos-item:before {
    content: '';
    float: left;
    padding-top: 100%
}

.chat .msg .btn-message-remove {
    visibility: hidden
}

.chat .msg:hover .btn-message-remove {
    visibility: visible
}

#video-player .video-player-bar-series-watch.loader .icon,#video-player-bar-menu .video-player-bar-series-watch.loader .icon,.dialog-list .list-group-item .dialog-item-options,.released-episodes-watch.loader .icon {
    visibility: hidden
}

.notifi-list .list-group-item .dialog-item-options {
    display: none
}

.notifi-list .list-group-item.active {
    background-color: transparent;
    border-color: transparent;
    color: #212529
}

.notifi-list .list-group-item.active:focus,.notifi-list .list-group-item.active:hover {
    color: #212529;
    text-decoration: none;
    background-color: #f8f9fa
}

.notifi-list .list-group-item.active:active {
    color: #212529;
    background-color: #e9ecef
}

.dialog-list .list-group-item:hover .dialog-item-options {
    visibility: visible
}

.search-result-word {
    background-color: #fc0;
    border-radius: .3em;
    padding: 2px 0;
    color: #212529
}

#preview-dialog-list-group .not-read .dialog-name,#preview-dialog-list-group .not-read .dialog-text {
    color: #212529!important;
    font-weight: 700
}

#preview-dialog-list-group .dialog-name,#preview-dialog-list-group .dialog-text {
    color: currentColor!important;
    font-weight: inherit
}

.not-read .dialog-name,.not-read .dialog-text {
    color: #212529!important;
    font-weight: 700
}

.not-read time {
    color: #ff5c57
}

.message-seen-sent {
    color: #ff5c57;
    border: 1px solid #ff5c57
}

.message-seen-delivery {
    color: #fff;
    border: 1px solid #ff5c57;
    background-color: #ff5c57
}

.m-dialog-left,.m-dialog-right {
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: transform .4s ease;
    transition: transform .4s ease,-webkit-transform .4s ease;
    background-color: #fff
}

#messages .m-dialog-left {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    z-index: 11
}

@media (min-width: 992px) {
    #messages .m-dialog-left {
        display:block!important;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

#messages.b-begin .m-dialog-left {
    display: block!important
}

#messages.b-opened #message-container {
    display: none
}

#messages #message-container {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    transition: transform .4s ease;
    transition: transform .4s ease,-webkit-transform .4s ease;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left
}

@media (max-width: 991px) {
    #messages #message-container {
        border:none
    }
}

#messages.b-opening #message-container {
    -webkit-transform: translate3d(30%,0,0);
    transform: translate3d(30%,0,0)
}

@media (min-width: 992px) {
    #messages.b-opened #message-container {
        display:block
    }

    #messages.b-opening #message-container {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

#messages.b-opening .m-dialog-left {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
}

#message-content-container .m-dialog-right {
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    z-index: 10
}

#message-content-container.b-begin .m-dialog-right {
    display: block!important
}

#message-content-container.b-opened #message-content {
    display: none
}

#message-content-container #message-content {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-transition: -webkit-transform .4s ease;
    -o-transition: transform .4s ease;
    transition: transform .4s ease;
    transition: transform .4s ease,-webkit-transform .4s ease;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left
}

#message-content-container.b-opening #message-content {
    -webkit-transform: translate3d(-30%,0,0);
    transform: translate3d(-30%,0,0)
}

#message-content-container.b-opening .m-dialog-right {
    -webkit-transform: translate3d(-1px,0,0);
    transform: translate3d(-1px,0,0)
}

.security-or:after,.security-or:before {
    content: '-'
}

.soc-container .soc {
    border-radius: 2px;
    height: 36px;
    border: 0;
    font-family: Helvetica Neue,Arial,sans-serif
}

.soc-container .soc .soc-icon {
    height: 36px;
    width: 36px
}

.soc-container .soc .soc-icon>span {
    background-color: #fff;
    display: block;
    width: 29px;
    height: 28px;
    border-radius: 2px
}

.soc-container .soc-vkontakte {
    color: #fff;
    background-color: #45668e
}

.soc-container .soc-vkontakte .soc-icon {
    color: #45668e
}

.soc-container .soc-twitter {
    color: #fff;
    background-color: #1da1f2
}

.soc-container .soc-twitter .soc-icon {
    color: #1da1f2
}

.soc-container .soc-facebook {
    color: #fff;
    background-color: #3b5998
}

.soc-container .soc-facebook .soc-icon {
    color: #3b5998
}

.soc-container .soc-yandex {
    color: #fff;
    background-color: red
}

.soc-container .soc-odnoklassniki {
    color: #111;
    background-color: #ed812b
}

.soc-container .soc-odnoklassniki .soc-icon {
    color: #ed812b
}

.soc-container .soc-gplus {
    color: #fff;
    background-color: #dc4e41
}

.soc-container .soc-gplus .soc-icon {
    color: #dc4e41
}

.anime-popover .description .read-more-link,.review .read-more-link {
    color: #212529;
    line-height: 28px
}

@media (min-width: 992px) {
    .comments .comment .comment-avatar a {
        width:62px;
        height: 62px
    }

    .comments .comment form {
        margin-left: 76px
    }

    .comments .children {
        margin-left: 78px
    }

    .comments .children form {
        margin-left: 66px
    }
}

.comments .comment-text {
    word-wrap: break-word;
    max-height: 74px;
    overflow: hidden
}

.comments .children .comment-avatar a {
    width: 42px;
    height: 42px
}

@media (max-width: 991px) {
    .comments .children {
        padding-left:17px;
        border-left: 2px solid #e7e9ee
    }
}

.th-track .th-track-name,.tracks .track .track-name {
    padding-left: 46px
}

.comments form {
    position: relative
}

.comments .cancel-comment-reply-link {
    position: absolute;
    right: 5px;
    top: 0
}

.review-item+.review-item {
    padding-top: 1rem;
    border-top: 3px solid #ff5c57;
    margin-top: 1rem
}

.review-item-text {
    max-height: 215px;
    overflow: hidden
}

.review .read-more-text {
    border-bottom: 1px dashed
}

.review .read-more-text:hover {
    border-bottom: none
}

.anime-popover .description .read-more-text,.seasons .read-more-text {
    border-bottom: 1px dashed
}

.review .read-more-link {
    font-size: 1.2rem
}

.tracks .track {
    position: relative
}

.tracks .track .track-num {
    position: absolute;
    left: 0;
    width: 30px;
    height: 30px
}

.tracks .track .player-btn {
    position: absolute;
    left: 0
}

.tracks .track .player-btn button {
    width: 30px;
    height: 30px
}

.tracks .track .player-btn button .icon {
    width: 1.5rem;
    height: 1.5rem
}

.th-track .th-track-num {
    position: absolute;
    left: 0;
    width: 30px;
    height: 30px
}

.anime-popover .description .read-more-text:hover {
    border-bottom: none
}

.anime-popover .anime-synonyms {
    max-height: 35px
}

.anime-tags .anime-tag {
    padding: 0 5px 2px;
    color: #7f7f7f;
    border: 1px solid #c5c5c5;
    border-radius: 3px;
    display: inline-block
}

.anime-tags .anime-tag:hover {
    background-color: #ff5c57;
    border-color: #ff5c57;
    color: #fff
}

.anime-small-description {
    max-height: 110px
}

.anime-synonyms {
    max-height: 42px
}

.synonyms .read-more-link {
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
    color: #212529;
    padding-right: .5rem;
    padding-left: .5rem
}

.c-image {
    max-width: 250px
}

.watch-panel .online {
    background-color: #fff;
    width: 22px;
    height: 22px
}

.my-list .rewatching,.my-list .watching {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb
}

.my-list .rewatching hr,.my-list .watching hr {
    border-top-color: #abdde5
}

.my-list .rewatching .alert-link,.my-list .watching .alert-link {
    color: #062c33
}

.my-list .completed {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb
}

.my-list .completed hr {
    border-top-color: #b1dfbb
}

.my-list .completed .alert-link {
    color: #0b2e13
}

.my-list .onHold {
    background-color: #ebeef1;
    border-color: #dbe0e6
}

.my-list .dropped {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb
}

.my-list .dropped hr {
    border-top-color: #f1b0b7
}

.my-list .dropped .alert-link {
    color: #491217
}

.my-list .planned {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba
}

.my-list .planned hr {
    border-top-color: #ffe8a1
}

.my-list .planned .alert-link {
    color: #533f03
}

.my-list-statistics .bar {
    background-color: #ff5c57;
    color: #fff;
    border-radius: 2px;
    min-width: 53px
}

.video-block .video-item:before {
    content: '';
    float: left;
    padding-top: 59%
}

.video-block .video-item .video-item-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    -webkit-transition: background-color .3s ease,opacity .3s ease,visibility .3s ease;
    -o-transition: background-color .3s ease,opacity .3s ease,visibility .3s ease;
    transition: background-color .3s ease,opacity .3s ease,visibility .3s ease
}

.video-block .video-item .video-item-icon .icon {
    width: 3rem;
    height: 3rem
}

.video-block .video-item .marker {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%
}

.video-block .video-item .marker .duration,.video-block .video-item .marker .type {
    line-height: 19px;
    display: inline-block;
    color: #fff;
    background-color: #212529
}

.video-block .video-item:hover .video-item-icon {
    background-color: rgba(0,0,0,.6)
}

.screenshots-item {
    position: relative
}

@media (max-width: 991px) {
    .screenshots-item:nth-child(3),.screenshots-item:nth-child(4) {
        display:none
    }
}

.seasons .read-more-text:focus,.seasons .read-more-text:hover {
    border-bottom: none
}

.seasons .read-more-link {
    color: #212529;
    font-size: 1.2rem;
    line-height: 28px
}

.seasons-item-pic img {
    -webkit-box-shadow: 0 3px 5px #ccc;
    box-shadow: 0 3px 5px #ccc
}

.seasons-container {
    max-height: 125px
}

.rating-statistics .bar {
    background-color: #ff5c57;
    color: #fff;
    border-radius: 2px;
    min-width: 53px
}

.anime-poster .poster-icon,.character-poster .poster-icon,.manga-poster .poster-icon,.people-poster .poster-icon,.screenshots-item .poster-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 80px;
    width: 80px;
    line-height: 80px;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    background-color: rgba(255,255,255,.8);
    color: #212529
}

.anime-poster .icon,.character-poster .icon,.manga-poster .icon,.people-poster .icon,.screenshots-item .icon {
    width: 2.5rem;
    height: 2.5rem
}

.anime-poster:hover .poster-icon,.character-poster:hover .poster-icon,.manga-poster:hover .poster-icon,.people-poster:hover .poster-icon,.screenshots-item:hover .poster-icon {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

.anime-grid-lazy,.anime-grid2-lazy,.anime-list-lazy {
    background-color: #fff;
    position: relative;
    z-index: 3
}

.anime-grid-lazy:not(img),.anime-grid2-lazy:not(img),.anime-list-lazy:not(img) {
    padding-bottom: 140%
}

.anime-grid-lazy:not(img) {
    width: 100%;
    height: 0
}

.anime-list-lazy:not(img) {
    width: 90px;
    height: 0
}

@media (min-width: 576px) {
    .anime-list-lazy:not(img) {
        width:150px
    }
}

.anime-grid2-lazy:not(img) {
    width: 90px;
    height: 0
}

.released-episodes .released-episodes-container {
    max-height: 558px;
    overflow: hidden
}

.released-episodes .released-episodes-container.open {
    overflow: initial
}

.released-episodes-watch.watched .icon-visibility-off,.released-episodes-watch:not(.watched) .icon-visibility {
    display: none
}

.released-episodes .ispinner {
    position: absolute
}

.popover-card .character-info>.read-more-theme-cursor-one .read-more {
    margin-bottom: .5rem
}

.animes-grid-item-body .card-title a {
    white-space: normal;
    font-size: 1.1rem
}

@media (min-width: 576px) {
    .animes-grid-item-body .card-title a {
        font-size:100%
    }
}

.animes-grid-item-body-info {
    font-size: 90%
}

@media (min-width: 576px) {
    .animes-grid-item-body-info {
        font-size:100%
    }
}

[data-video-player-title] {
    color: #fff
}

[data-episode-replace-type] {
    color: #ff5c57
}

.video-player .social {
    border-top: 1px solid;
    border-bottom: 1px solid
}

.video-player .video-player-number-series {
    width: 105px
}

.video-player .video-player-number-series-text {
    border-bottom: 1px dotted;
    cursor: default
}

.video-player-bar-series-list {
    overflow: hidden;
    padding-right: 95px;
    border-right: 1px solid #383838;
    position: relative;
    width: 100%
}

.video-player-bar-series-list .flag-type {
    position: absolute;
    font-size: 60%;
    top: 0;
    left: 100%;
    padding: 2px 5px;
    border-radius: 2px
}

.video-player-bar-series-list .flag-type.filler {
    background-color: #a12121;
    color: #fff
}

.video-player .owl-nav,.video-player .tns-controls {
    display: table-cell;
    vertical-align: middle;
    white-space: nowrap;
    border-left: 1px solid #383838;
    position: absolute;
    right: 0
}

.video-player .owl-nav .owl-next,.video-player .owl-nav .owl-prev,.video-player .owl-nav [data-controls=prev],.video-player .owl-nav [data-controls=next],.video-player .tns-controls .owl-next,.video-player .tns-controls .owl-prev,.video-player .tns-controls [data-controls=prev],.video-player .tns-controls [data-controls=next] {
    cursor: pointer;
    padding: 5px;
    color: #fff;
    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    -webkit-transition: color .15s ease-in-out,visibility .15s ease-in-out,opacity .15s ease-in-out;
    -o-transition: color .15s ease-in-out,visibility .15s ease-in-out,opacity .15s ease-in-out;
    transition: color .15s ease-in-out,visibility .15s ease-in-out,opacity .15s ease-in-out
}

.video-player .owl-nav .owl-next:hover,.video-player .owl-nav .owl-prev:hover,.video-player .owl-nav [data-controls=prev]:hover,.video-player .owl-nav [data-controls=next]:hover,.video-player .tns-controls .owl-next:hover,.video-player .tns-controls .owl-prev:hover,.video-player .tns-controls [data-controls=prev]:hover,.video-player .tns-controls [data-controls=next]:hover {
    color: #ff5c57
}

.video-player .owl-nav .owl-next:focus,.video-player .owl-nav .owl-next:hover,.video-player .owl-nav .owl-prev:focus,.video-player .owl-nav .owl-prev:hover,.video-player .owl-nav [data-controls=prev]:focus,.video-player .owl-nav [data-controls=prev]:hover,.video-player .owl-nav [data-controls=next]:focus,.video-player .owl-nav [data-controls=next]:hover,.video-player .tns-controls .owl-next:focus,.video-player .tns-controls .owl-next:hover,.video-player .tns-controls .owl-prev:focus,.video-player .tns-controls .owl-prev:hover,.video-player .tns-controls [data-controls=prev]:focus,.video-player .tns-controls [data-controls=prev]:hover,.video-player .tns-controls [data-controls=next]:focus,.video-player .tns-controls [data-controls=next]:hover {
    outline: 0
}

.video-player .owl-nav .owl-next .icon,.video-player .owl-nav .owl-prev .icon,.video-player .owl-nav [data-controls=prev] .icon,.video-player .owl-nav [data-controls=next] .icon,.video-player .tns-controls .owl-next .icon,.video-player .tns-controls .owl-prev .icon,.video-player .tns-controls [data-controls=prev] .icon,.video-player .tns-controls [data-controls=next] .icon {
    width: 2rem;
    height: 2rem
}

.video-player .owl-nav .owl-next.disabled,.video-player .owl-nav .owl-next[disabled],.video-player .owl-nav .owl-prev.disabled,.video-player .owl-nav .owl-prev[disabled],.video-player .owl-nav [data-controls=prev].disabled,.video-player .owl-nav [data-controls=prev][disabled],.video-player .owl-nav [data-controls=next].disabled,.video-player .owl-nav [data-controls=next][disabled],.video-player .tns-controls .owl-next.disabled,.video-player .tns-controls .owl-next[disabled],.video-player .tns-controls .owl-prev.disabled,.video-player .tns-controls .owl-prev[disabled],.video-player .tns-controls [data-controls=prev].disabled,.video-player .tns-controls [data-controls=prev][disabled],.video-player .tns-controls [data-controls=next].disabled,.video-player .tns-controls [data-controls=next][disabled] {
    color: rgba(255,255,255,.2);
    cursor: default
}

.video-player .owl-nav .owl-next,.video-player .owl-nav [data-controls=next],.video-player .tns-controls .owl-next,.video-player .tns-controls [data-controls=next] {
    margin-right: 6px
}

.video-player .owl-nav .owl-prev,.video-player .owl-nav [data-controls=prev],.video-player .tns-controls .owl-prev,.video-player .tns-controls [data-controls=prev] {
    margin-left: 6px
}

.video-player iframe {
    position: absolute;
    top: 0;
    left: 0
}

#video-player-bar-menu,.bg-inverse.video-player {
    color: #fff;
    background-color: #333
}

#video-player-bar-menu .text-player-gray,.bg-inverse.video-player .text-player-gray {
    color: #999
}

#video-player-bar-menu .social,.bg-inverse.video-player .social {
    border-top-color: #464646;
    border-bottom-color: #464646
}

#video-player-bar-menu .video-player-border-left::before,.bg-inverse.video-player .video-player-border-left::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-color: #383838
}

#video-player-bar-menu .video-player-bg,.bg-inverse.video-player .video-player-bg {
    background-color: #111
}

#video-player .video-player-online,#video-player-bar-menu .video-player-online {
    padding-top: 66%;
    background: rgba(0,0,0,.8)
}

@media (min-width: 576px) {
    #video-player .video-player-online,#video-player-bar-menu .video-player-online {
        padding-top:56.425%
    }
}

#video-player .video-player-online-not,#video-player-bar-menu .video-player-online-not {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

#video-player .video-player-online .player-blocked,#video-player-bar-menu .video-player-online .player-blocked {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    text-align: center;
    width: 80%
}

#video-player .video-player-bar,#video-player-bar-menu .video-player-bar {
    border-top: 1px solid #383838;
    background-color: #1d1d1d
}

#video-player .video-player-side .nav,#video-player-bar-menu .video-player-side .nav {
    border-bottom: 1px solid #434343
}

#video-player .video-player-side .nav-link,#video-player-bar-menu .video-player-side .nav-link {
    border-top-right-radius: 2px;
    border-top-left-radius: 2px
}

#video-player .video-player-side .nav-link.active,#video-player-bar-menu .video-player-side .nav-link.active {
    background-color: #434343
}

#video-player .video-player-side .nav-link.active .dropdown-toggle,#video-player-bar-menu .video-player-side .nav-link.active .dropdown-toggle {
    background-color: #505050
}

#video-player .video-player-side .btn-group,#video-player-bar-menu .video-player-side .btn-group {
    position: initial
}

#video-player .video-player-side .dropdown-toggle,#video-player-bar-menu .video-player-side .dropdown-toggle {
    background-color: #1e1e1e;
    color: #fff;
    padding: 0 .5rem;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 2px rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 2px rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)
}

#video-player .video-player-side .dropdown-toggle::after,#video-player-bar-menu .video-player-side .dropdown-toggle::after {
    margin-left: 0
}

@media (min-width: 992px) {
    #video-player .video-player-side .tab-content,#video-player-bar-menu .video-player-side .tab-content {
        max-height:310px;
        overflow-x: auto
    }
}

@media (min-width: 1200px) {
    #video-player .video-player-side .tab-content,#video-player-bar-menu .video-player-side .tab-content {
        max-height:373px
    }
}

@media (min-width: 1400px) {
    #video-player .video-player-side .tab-content,#video-player-bar-menu .video-player-side .tab-content {
        max-height:445px
    }
}

#video-player .video-player-toggle,#video-player-bar-menu .video-player-toggle {
    padding: 2px 5px;
    max-height: 445px
}

#video-player .video-player-toggle-item,#video-player-bar-menu .video-player-toggle-item {
    padding: 2px 7px;
    display: inline-block
}

#video-player .video-player-toggle-item.video-player__active,#video-player-bar-menu .video-player-toggle-item.video-player__active {
    background-color: #ff5c57;
    cursor: default
}

#video-player .video-player-bar-series-item,#video-player-bar-menu .video-player-bar-series-item {
    border: 2px solid transparent;
    color: #fff;
    padding: 7px 13px;
    -webkit-transition: border-color .15s ease-in-out;
    -o-transition: border-color .15s ease-in-out;
    transition: border-color .15s ease-in-out;
    font-weight: 300;
    text-decoration: underline;
    font-size: 17px
}

#video-player .video-player-bar-series-item.found-number-series,#video-player .video-player-bar-series-item:hover,#video-player-bar-menu .video-player-bar-series-item.found-number-series,#video-player-bar-menu .video-player-bar-series-item:hover {
    border-color: rgba(255,255,255,.12);
    text-decoration: none
}

#video-player .video-player-bar-series-item.video-player__active,#video-player-bar-menu .video-player-bar-series-item.video-player__active {
    border-color: #ff5c57;
    font-weight: 700;
    text-decoration: none
}

#video-player .video-player-bar-series-watch,#video-player-bar-menu .video-player-bar-series-watch {
    position: relative
}

#video-player .video-player-bar-series-watch.watched,#video-player-bar-menu .video-player-bar-series-watch.watched {
    color: #fff
}

#video-player .video-player-bar-series-watch .ispinner,#video-player-bar-menu .video-player-bar-series-watch .ispinner {
    position: absolute
}

#video-player .video-player-side {
    display: none
}

@media (min-width: 992px) {
    #video-player .video-player-side {
        display:block
    }
}

.animes-list-item {
    padding-top: 1rem;
    padding-bottom: 1rem
}

.p-poster__rate-flag {
    position: absolute;
    top: 10px;
    left: -4px
}

.p-poster__rate-flag:before {
    content: '';
    display: block;
    font-size: 0;
    line-height: 0;
    position: absolute;
    z-index: 3;
    bottom: -7px;
    left: 0;
    border-top: 7px solid #ffd400;
    border-left: 4px solid transparent;
    width: 0;
    height: 0
}

.p-poster__rate-flag .p-rate-flag__inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #111;
    position: relative;
    overflow: hidden;
    padding: 4px 16px 4px 6px;
    z-index: 6
}

.p-poster__rate-flag .p-rate-flag__inner:after,.p-poster__rate-flag .p-rate-flag__inner:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    z-index: -1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 6px solid transparent
}

.p-poster__rate-flag .p-rate-flag__inner:before {
    border-top: 15px solid #ffd400
}

.p-poster__rate-flag .p-rate-flag__inner:after {
    top: 50%;
    border-bottom: 15px solid #ffd400
}

.p-poster__rate-flag .p-rate-flag__text {
    display: inline-block;
    vertical-align: middle
}

.animes-grid-item {
    padding-top: 1rem;
    padding-bottom: 1rem
}

.sorter .dropdown-menu .dropdown-item:not(.sortable) {
    color: #fff;
    text-decoration: none;
    background-color: #ff5c57
}

#filter-block {
    display: none
}

@media (min-width: 1200px) {
    #filter-block {
        display:block
    }
}

.filter .fpr-negate {
    padding-right: 40px
}

.filter-scroll {
    max-height: 260px
}

.filter .card-header {
    border-width: 3px
}

.filter .dropdown-item .select__option-negate {
    width: 40px;
    height: 100%;
    opacity: .7;
    position: absolute;
    top: 0;
    right: 0;
    display: none
}

.filter .dropdown-item.select__option_negated .select__option-negate,.filter .dropdown-item:hover .select__option-negate,.noUi-tooltip {
    display: block
}

.filter .dropdown-item .select__option-negate:before {
    content: '';
    border: 1px solid rgba(0,0,0,.8);
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.filter .dropdown-item .select__option-negate:hover {
    opacity: 1
}

.filter .dropdown-item.select__option_hover-negate {
    background: #ffcece
}

.filter .dropdown-item .custom-control-description {
    pointer-events: none
}

.btn-filter {
    border: 1px solid #e6e6e6;
    -webkit-transition: border-color .2s ease-in-out;
    -o-transition: border-color .2s ease-in-out;
    transition: border-color .2s ease-in-out
}

.btn-filter:hover {
    border-color: rgba(0,0,0,.24)
}

.btn-filter:focus,.btn-filter[aria-expanded=true] {
    color: #495057;
    border-color: rgba(0,0,0,.24);
    outline: 0
}

.btn-filter.selected {
    border-color: #ffa6a3
}

.last-update-img {
    width: 48px
}

.last-update-title {
    max-height: 46px;
    overflow: hidden
}

.last-update-header {
    background-color: rgba(0,0,0,.15)
}

.last-update-container {
    max-height: 506px
}

/*! nouislider - 11.1.0 - 2018-04-02 11:18:13 */
.noUi-target,.noUi-target * {
    -webkit-touch-callout: none;
    -ms-touch-action: none;
    touch-action: none;
    user-select: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

#scrollUp,.spoiler-after,.spoiler-before,.spoiler-trigger {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

.noUi-target {
    position: relative;
    direction: ltr
}

.noUi-base,.noUi-connects {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1
}

.noUi-connect,.noUi-handle,.noUi-marker,.noUi-origin,.noUi-pips,.noUi-tooltip,.noUi-value {
    position: absolute
}

.noUi-connects {
    overflow: hidden;
    z-index: 0
}

.noUi-connect,.noUi-origin {
    will-change: transform;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
}

html:not([dir=rtl]) .noUi-horizontal .noUi-origin {
    left: auto;
    right: 0
}

.noUi-vertical .noUi-origin {
    width: 0
}

.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin {
    -webkit-transition: -webkit-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.noUi-state-drag * {
    cursor: inherit!important
}

.noUi-horizontal {
    height: 4px
}

.noUi-horizontal .noUi-handle {
    height: 24px;
    width: 14px;
    left: -7px;
    top: -10px
}

.noUi-vertical {
    width: 18px
}

.noUi-vertical .noUi-handle {
    width: 28px;
    height: 34px;
    left: -6px;
    top: -17px
}

html:not([dir=rtl]) .noUi-horizontal .noUi-handle {
    right: -7px;
    left: auto
}

html:not([dir=rtl]) .noUi-horizontal.slider-toggle .noUi-handle {
    right: -10px
}

.filter .noUi-target {
    background-color: rgba(0,0,0,.08)
}

.filter .noUi-connects {
    border-radius: 3px
}

.filter .noUi-connect {
    background-color: #ff5c57;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 0 3px rgba(51,51,51,.45);
    box-shadow: inset 0 0 3px rgba(51,51,51,.45);
    -webkit-transition: background 450ms;
    -o-transition: background 450ms;
    transition: background 450ms
}

.filter .noUi-draggable {
    cursor: ew-resize
}

.filter .noUi-vertical .noUi-draggable {
    cursor: ns-resize
}

.filter .noUi-handle {
    border-radius: 4px;
    background-color: #fff;
    cursor: default;
    -webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,.04);
    box-shadow: 0 2px 0 0 rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.2);
    outline: 0
}

.filter .slider-range {
    height: 55px
}

[disabled] .noUi-connect {
    background: #B8B8B8
}

.noUi-marker,.noUi-marker-large,.noUi-marker-sub {
    background: #ccc
}

[disabled] .noUi-handle,[disabled].noUi-handle,[disabled].noUi-target {
    cursor: not-allowed
}

.noUi-pips,.noUi-pips * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.noUi-pips {
    color: #999
}

.noUi-value {
    white-space: nowrap;
    font-size: 80%
}

.noUi-value-sub {
    color: #ccc;
    font-size: 10px
}

.noUi-tooltip,.spoiler-after:after,.spoiler-before:before {
    font-size: 80%
}

.noUi-pips-horizontal {
    padding: 10px 0;
    height: 80px;
    top: 100%;
    left: 0;
    width: 100%
}

.noUi-value-horizontal {
    -webkit-transform: translate3d(-50%,70%,0);
    transform: translate3d(-50%,70%,0)
}

.noUi-rtl .noUi-value-horizontal {
    -webkit-transform: translate(50%,50%);
    -ms-transform: translate(50%,50%);
    transform: translate(50%,50%)
}

.noUi-marker-horizontal.noUi-marker {
    margin-left: -1px;
    width: 2px;
    height: 5px
}

.noUi-marker-horizontal.noUi-marker-sub {
    height: 10px
}

.noUi-marker-horizontal.noUi-marker-large {
    height: 15px
}

.noUi-pips-vertical {
    padding: 0 10px;
    height: 100%;
    top: 0;
    left: 100%
}

.noUi-value-vertical {
    -webkit-transform: translate(0,-50%,0);
    -ms-transform: translate(0,-50%,0);
    transform: translate(0,-50%,0);
    padding-left: 25px
}

.noUi-rtl .noUi-value-vertical {
    -webkit-transform: translate(0,50%);
    -ms-transform: translate(0,50%);
    transform: translate(0,50%)
}

.noUi-marker-vertical.noUi-marker {
    width: 5px;
    height: 2px;
    margin-top: -1px
}

.noUi-marker-vertical.noUi-marker-sub {
    width: 10px
}

.noUi-marker-vertical.noUi-marker-large {
    width: 15px
}

.noUi-tooltip {
    -webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,.04);
    box-shadow: 0 2px 0 0 rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0 4px 4px;
    background-color: #fff;
    padding: 1px 6px 3px;
    white-space: nowrap
}

.noUi-tooltip:after,.noUi-tooltip:before {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    border-color: transparent;
    border-style: solid;
    border-width: 6px 6px 0
}

html.mm-opened,html.mm-widescreen body {
    position: relative
}

.noUi-tooltip:before {
    border-top-color: rgba(0,0,0,.25);
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0)
}

.noUi-tooltip:after {
    border-top-color: #fff;
    -webkit-transform: translate(-50%,-1px);
    -ms-transform: translate(-50%,-1px);
    transform: translate(-50%,-1px)
}

.noUi-horizontal .noUi-tooltip {
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0);
    left: 50%;
    bottom: 140%
}

.noUi-vertical .noUi-tooltip {
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    transform: translate(0,-50%);
    top: 50%;
    right: 120%
}

.slider-toggle.noUi-horizontal {
    width: 26px;
    background-color: #999;
    border-radius: 10px;
    height: 14px
}

.slider-toggle.noUi-horizontal .noUi-handle {
    width: 20px;
    height: 20px;
    -webkit-box-shadow: 0 1px 5px 0 rgba(0,0,0,.6);
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.6);
    background-color: #fafafa;
    border: 0;
    border-radius: 50%;
    top: -3px
}

.slider-toggle.noUi-horizontal.and {
    background-color: #93c9f2
}

.slider-toggle.noUi-horizontal.and .noUi-handle {
    background-color: #2693e6
}

.card-header .all {
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out
}

.card-header .all:hover {
    color: rgba(255,255,255,.75);
    text-decoration: none
}

.card-block .list {
    margin-top: -10px;
    margin-bottom: -10px
}

.card-block .list-item {
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px dashed #DDD
}

.card-block .list-item:first-child {
    border-top: 0
}

#scrollUp {
    padding: 7px 15px 7px 10px;
    left: 20px;
    bottom: 50px;
    background-color: rgba(51,51,51,.88);
    border: 1px solid rgba(51,51,51,.88);
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    user-select: none;
    border-radius: 2px
}

#scrollUp:hover {
    background-color: #333
}

@media (max-width: 991px) {
    #scrollUp {
        display:none!important
    }
}

.mm-slideout {
    -webkit-transition: -webkit-transform .4s ease;
    -o-transition: transform .4s ease;
    transition: transform .4s ease;
    transition: transform .4s ease,-webkit-transform .4s ease;
    z-index: 1
}

html.mm-opened {
    overflow-x: hidden
}

html.mm-opened #mm-blocker {
    opacity: .3
}

html.mm-opened .mm-menu.mm-fx-menu-slide {
    -webkit-transform: translate3d(-30%,0,0);
    transform: translate3d(-30%,0,0)
}

html.mm-blocking,html.mm-blocking body,html.mm-opened #wrap {
    overflow: hidden
}

html.mm-opening .mm-slideout {
    -webkit-transform: translate3d(80%,0,0);
    transform: translate3d(80%,0,0)
}

@media (min-width: 576px) {
    html.mm-opening .mm-slideout {
        -webkit-transform:translate3d(440px,0,0);
        transform: translate3d(440px,0,0)
    }
}

html.mm-opening .mm-menu.mm-fx-menu-slide {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
}

html.mm-blocking #mm-blocker {
    display: block
}

#mm-blocker,html.mm-widescreen #mm-blocker {
    display: none
}

html.mm-widescreen.mm-blocking,html.mm-widescreen.mm-blocking body {
    overflow: auto
}

html.mm-widescreen .mm-slideout {
    -webkit-transform: none!important;
    -ms-transform: none!important;
    transform: none!important
}

#mm-blocker {
    -webkit-transition: opacity .4s ease .4s;
    -o-transition: opacity .4s ease .4s;
    transition: opacity .4s ease .4s;
    opacity: 0;
    background: #000;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2
}

.mm-menu {
    background-color: #f3f3f3;
    display: block;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0
}

.mm-menu.mm-fx-menu-slide {
    -webkit-transition: -webkit-transform .4s ease;
    -o-transition: transform .4s ease;
    transition: transform .4s ease;
    transition: transform .4s ease,-webkit-transform .4s ease
}

.mm-menu.mm-theme-white {
    background: #fff;
    border-color: rgba(0,0,0,.1);
    color: rgba(0,0,0,.6)
}

.mm-menu.mm-offcanvas {
    z-index: 0;
    display: none;
    position: fixed;
    width: 80%;
    min-width: 140px;
    max-width: 440px
}

.mm-menu.mm-offcanvas.mm-opened {
    display: block
}

.mm-menu.mm-widescreen {
    display: none!important
}

.icon-bar {
    width: 30px;
    height: 24px;
    position: relative;
    padding: 0!important;
    border: 0
}

.icon-bar-inner {
    top: auto;
    bottom: 0;
    -webkit-transition-delay: .15s;
    -o-transition-delay: .15s;
    transition-delay: .15s;
    display: block
}

.icon-bar-inner,.icon-bar-inner::after,.icon-bar-inner::before {
    width: 30px;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    -webkit-transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease
}

.icon-bar-inner::before {
    top: -10px;
    -webkit-transition: top .12s .3s cubic-bezier(.33333,.66667,.66667,1),-webkit-transform .15s cubic-bezier(.55,.055,.675,.19);
    -o-transition: top .12s .3s cubic-bezier(.33333,.66667,.66667,1),transform .15s cubic-bezier(.55,.055,.675,.19);
    transition: top .12s .3s cubic-bezier(.33333,.66667,.66667,1),transform .15s cubic-bezier(.55,.055,.675,.19);
    transition: top .12s .3s cubic-bezier(.33333,.66667,.66667,1),transform .15s cubic-bezier(.55,.055,.675,.19),-webkit-transform .15s cubic-bezier(.55,.055,.675,.19)
}

.icon-bar-inner::after {
    bottom: -10px;
    top: -20px;
    -webkit-transition: top .3s .3s cubic-bezier(.33333,.66667,.66667,1),opacity .1s linear;
    -o-transition: top .3s .3s cubic-bezier(.33333,.66667,.66667,1),opacity .1s linear;
    transition: top .3s .3s cubic-bezier(.33333,.66667,.66667,1),opacity .1s linear
}

.icon-bar-inner::after,.icon-bar-inner::before {
    content: "";
    display: block
}

.icon-bar.active .icon-bar-inner {
    -webkit-transform: translate3d(0,-10px,0) rotate(-45deg);
    transform: translate3d(0,-10px,0) rotate(-45deg);
    -webkit-transition-delay: .32s;
    -o-transition-delay: .32s;
    transition-delay: .32s;
    -webkit-transition-timing-function: cubic-bezier(.215,.61,.355,1);
    -o-transition-timing-function: cubic-bezier(.215,.61,.355,1);
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.icon-bar.active .icon-bar-inner::before {
    top: 0;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transition: top .12s .18s cubic-bezier(.33333,0,.66667,.33333),-webkit-transform .15s .42s cubic-bezier(.215,.61,.355,1);
    -o-transition: top .12s .18s cubic-bezier(.33333,0,.66667,.33333),transform .15s .42s cubic-bezier(.215,.61,.355,1);
    transition: top .12s .18s cubic-bezier(.33333,0,.66667,.33333),transform .15s .42s cubic-bezier(.215,.61,.355,1);
    transition: top .12s .18s cubic-bezier(.33333,0,.66667,.33333),transform .15s .42s cubic-bezier(.215,.61,.355,1),-webkit-transform .15s .42s cubic-bezier(.215,.61,.355,1)
}

.icon-bar.active .icon-bar-inner::after {
    top: 0;
    opacity: 0;
    -webkit-transition: top .3s cubic-bezier(.33333,0,.66667,.33333),opacity .1s .27s linear;
    -o-transition: top .3s cubic-bezier(.33333,0,.66667,.33333),opacity .1s .27s linear;
    transition: top .3s cubic-bezier(.33333,0,.66667,.33333),opacity .1s .27s linear
}

.mm-content {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    -webkit-overflow-scrolling: touch
}

.mm-content::after {
    content: '';
    position: absolute;
    -webkit-box-shadow: 0 0 10px #000;
    box-shadow: 0 0 10px #000;
    top: 0;
    bottom: 0;
    right: -.1rem;
    width: .1rem;
    z-index: 100
}

#menu {
    background-color: #e9ebee
}

#menu .mm-header {
    background-color: rgba(0,0,0,.05);
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding-bottom: 1rem;
    padding-top: 1rem
}

#menu .mm-content .nav-item.active {
    background-color: #ccd1d8
}

#menu .mmenu-user .icon-person {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

#menu .mmenu-user-icon {
    padding: 10px;
    background-color: rgba(0,0,0,.03);
    width: 100px
}

#menu .mmenu-user-icon.avatar {
    padding: 0;
    -webkit-box-shadow: 0 2px 8px 1px rgba(0,0,0,.16);
    box-shadow: 0 2px 8px 1px rgba(0,0,0,.16)
}

#menu .mmenu-user-icon.avatar>div {
    position: relative
}

.spoiler-after,.spoiler-before,.spoiler-trigger {
    user-select: none
}

.spoiler-after:hover,.spoiler-before:hover,.spoiler-trigger:hover {
    text-decoration: none
}

.spoiler-before:before {
    content: '[spoiler]'
}

.spoiler-after:after {
    content: '[/spoiler]'
}

#itemRatingBlock .itemRatingBlock {
    height: 42px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

#itemRatingBlock .itemRatingBlock .no-rate {
    line-height: 17px;
    white-space: pre-line
}

#itemRatingBlock .itemRatingBlock .star-rating .icon-star {
    width: 2rem;
    height: 2rem;
    color: #e4bb24
}

#itemRatingBlock .itemRatingBlock .rating-value {
    font-size: 24px;
    line-height: 24px
}

#itemRatingBlock .itemRatingBlock .choice-rate .rating-subtext,#itemRatingBlock .itemRatingBlock .rating-count {
    font-size: 10px;
    line-height: 10px
}

#itemRatingBlock .itemRatingBlock .best-rating {
    font-size: 10px
}

#itemRatingBlock .itemRatingBlock .choice-rate {
    border-left: 1px solid rgba(0,0,0,.3);
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    transition: all .4s
}

#itemRatingBlock .itemRatingBlock .choice-rate-star .star {
    min-width: 26px
}

#itemRatingBlock .itemRatingBlock .choice-rate-star .icon-star {
    width: 2rem;
    height: 2rem;
    color: #d1d1d1
}

#itemRatingBlock .itemRatingBlock .choice-rate .rating-value {
    width: 55px
}

#itemRatingBlock .itemRatingBlock .choice-rate.open {
    border-left-color: #ff5c57;
    background-color: #ff5c57;
    color: #fff
}

#itemRatingBlock .itemRatingBlock .choice-rate.open .choice-rate-star .icon-star {
    color: #fff
}

#itemRatingBlock .itemRatingBlock .choice-rate.open .itemRatingForm {
    opacity: 1;
    width: 274px
}

#itemRatingBlock .itemRatingBlock .choice-rate .rate-this {
    width: 55px;
    line-height: 17px;
    white-space: pre-line
}

@media (max-width: 767px) {
    #itemRatingBlock .itemRatingBlock .choice-rate {
        position:initial!important
    }
}

#itemRatingBlock .itemRatingBlock .itemRatingForm {
    background-color: #b3b3b3;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    height: 100%;
    left: 100%;
    z-index: 10;
    opacity: 0;
    width: 0;
    -webkit-transition: margin-right .4s ease,width .4s ease,opacity .4s ease;
    -o-transition: margin-right .4s ease,width .4s ease,opacity .4s ease;
    transition: margin-right .4s ease,width .4s ease,opacity .4s ease
}

@media (max-width: 767px) {
    #itemRatingBlock .itemRatingBlock .itemRatingForm {
        left:0
    }
}

#itemRatingBlock .itemRatingBlock .itemRatingList {
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

#itemRatingBlock .itemRatingBlock .itemRatingList svg {
    width: 1.5rem;
    height: 1.5rem
}

#itemRatingBlock .itemRatingBlock .itemRatingList .rate_star {
    padding-left: 1px;
    padding-right: 1px
}

#itemRatingBlock .itemRatingBlock .itemRatingList .rate_star,#itemRatingBlock .itemRatingBlock .itemRatingList .rate_star.star_current~.rate_star {
    color: #d1d1d1
}

#itemRatingBlock .itemRatingBlock .itemRatingList:hover .rate_star {
    color: #fff!important
}

#itemRatingBlock .itemRatingBlock .itemRatingList:hover .rate_star:hover~.rate_star {
    color: #d1d1d1!important
}

#itemRatingBlock .itemRatingBlock.rate__rated .choice-rate-star .icon-star {
    color: #509e90
}

#itemRatingBlock .itemRatingBlock.rate__rated .rate_star {
    color: #fff
}

.review-rating.itemRatingBlock .itemRatingList .rate_star,.review-rating.itemRatingBlock .itemRatingList .rate_star.star_current~.rate_star {
    color: #d1d1d1
}

.review-rating.itemRatingBlock .itemRatingList .rate_star {
    color: #e4bb24
}

.rating-native-select {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: 10
}

.editor-smilies {
    max-height: 235px;
    overflow-y: auto!important
}

.editor-smilies img {
    padding: 4px;
    cursor: pointer
}

.editor-controls .spoiler {
    font-size: 90%
}

.editor-controls .spoiler:hover {
    text-decoration: none
}

.editor-controls .smilies.active {
    color: #ff130a
}

[data-readmore=container] {
    overflow: hidden
}

.read-more-container {
    position: relative
}

.read-more-container[data-read-more-init=true]::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(247,248,250,0)),to(#fff));
    background-image: -o-linear-gradient(top,rgba(247,248,250,0),#fff);
    background-image: linear-gradient(to bottom,rgba(247,248,250,0),#fff);
    height: 44px;
    z-index: 1
}

.read-more-container[data-read-more-init=true].read-more-open::after {
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0)
}

.read-more-container.read-more-bg-body[data-read-more-init=true]::after {
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(247,248,250,0)),to(#e9ebee));
    background-image: -o-linear-gradient(top,rgba(247,248,250,0),#e9ebee);
    background-image: linear-gradient(to bottom,rgba(247,248,250,0),#e9ebee)
}

.read-more-open {
    max-height: none!important
}

.read-more-theme-cursor-one .read-more-text {
    border-bottom: 1px dashed
}

.read-more-theme-cursor-one .read-more-text:hover {
    border-bottom: none
}

.read-more-theme-cursor-one .read-more-link {
    color: #212529;
    line-height: 28px
}

.read-more-theme-cursor-one .read-more-link:focus,.read-more-theme-cursor-one .read-more-link:hover {
    text-decoration: none
}

.read-more-link.disabled {
    cursor: not-allowed;
    opacity: .65;
    -webkit-box-shadow: none;
    box-shadow: none
}

[aria-expanded=false][data-effect-open]:before {
    content: attr(data-effect-open)
}

[aria-expanded=true][data-effect-close]:before {
    content: attr(data-effect-close)
}

.slideToggle-fast {
    -webkit-transition: max-height .3s linear;
    -o-transition: max-height .3s linear;
    transition: max-height .3s linear
}

.slideToggle-fast:not(.open) {
    max-height: 0
}

.affix {
    position: fixed;
    top: 0;
    z-index: 1000;
    -webkit-transition: top .4s ease,-webkit-transform .4s ease;
    -o-transition: top .4s ease,transform .4s ease;
    transition: top .4s ease,transform .4s ease;
    transition: top .4s ease,transform .4s ease,-webkit-transform .4s ease
}

.affix.show {
    top: 0!important
}

.navbar[data-sticky=scrollBar] {
    z-index: 1001
}

.mobile-panel-menu.show.up {
    top: 59px!important
}

.mobile-panel-menu {
    background-color: #4b545c
}

.mobile-panel-menu .b-l::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    background-color: rgba(255,255,255,.1)
}

.mobile-panel-menu .notifi {
    background-color: #ff5c57;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 11px;
    display: inline-block;
    margin-left: -10px;
    z-index: 10;
    top: -8px;
    position: relative
}

.tns-outer {
    width: 100%
}

.carousel-horizontal-container .tns-ovh {
    padding: 0 5px!important;
    margin: 0 -5px!important
}

.horzContainer>div {
    display: inline-block;
    vertical-align: top
}

.horzContainer .owl-nav .owl-next,.horzContainer .owl-nav .owl-prev {
    position: absolute;
    top: 40%;
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    transform: translate(0,-50%);
    background-color: transparent;
    border: 0
}

.horzContainer .owl-nav .owl-prev {
    left: 0
}

.horzContainer .owl-nav .owl-next {
    right: 0
}

.sorter-item {
    color: #ccc;
    -webkit-transition: color .15s;
    -o-transition: color .15s;
    transition: color .15s
}

.sorter-item:hover {
    color: #212529
}

.sorter-item svg {
    width: 1.5rem;
    height: 1.5rem
}

.sorter-item.active {
    background-color: #ff5c57;
    color: #fff;
    padding: .5rem;
    border-radius: 2px;
    cursor: default
}

</style>