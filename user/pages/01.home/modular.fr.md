---
title: Mkms
menu: Chef de projet Web

form:
    name: my-nice-form
    action: /home
    fields:
        - name: name
          label: Nom
          placeholder: Saisissez votre nom
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: Email
          placeholder: Saisissez votre adresse email
          type: text
          validate:
            rule: email
            required: true

        - name: message
          label: Message
          size: long
          placeholder: Saisissez votre message
          type: textarea
          validate:
            required: true

        - name: g-recaptcha-response
          label: Captcha
          type: captcha
          recaptcha_site_key: 6Lda44QUAAAAADB_JCx7xRJU6Bqskvlt80xa_M5s
          recaptcha_not_validated: 'Captcha non valide !'
          validate:
            required: true

    buttons:
        - type: submit
          value: Envoyer
          class: submit

    process:
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
        - message: Merci pour votre message !
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
