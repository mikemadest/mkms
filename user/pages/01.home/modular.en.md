---
title: Mkms
menu: Lead software engineer

form:
    name: my-nice-form
    action: /home#contact
    fields:
        - name: name
          label: Name
          placeholder: Enter your name
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: Email
          placeholder: Enter your email address
          type: text
          validate:
            rule: email
            required: true

        - name: message
          label: Message
          size: long
          placeholder: Enter your message
          type: textarea
          validate:
            required: true

        - name: g-recaptcha-response
          label: Captcha
          type: captcha
          recaptcha_site_key: 6Lda44QUAAAAADB_JCx7xRJU6Bqskvlt80xa_M5s
          recaptcha_not_validated: 'Captcha not valid !'
          validate:
            required: true

    buttons:
        - type: submit
          value: Submit
          class: submit

    process:
        - captcha:
            recaptcha_secret: 6Lda44QUAAAAAE7krKAheKTXmmgQWA9kPsh4hmZ8
        - email:
            from: "{{ config.plugins.email.from }}"
            to:
              - "{{ config.plugins.email.to }}"
              - "{{ form.value.email }}"
            subject: "[Feedback] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your feedback!
        - display: thankyou

onpage_menu: true
content:
    items: @self.modular
    order:
        by: default
        dir: asc
        custom:
            - _nav
            - _jumbo
            - _about
            - _recentworks
            - _olderworks
            - _contact
---
