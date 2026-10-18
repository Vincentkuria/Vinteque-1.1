<script lang="ts" setup>
import { Field as VeeField } from "vee-validate";
import Field from "./ui/field/Field.vue";
import FieldLabel from "./ui/field/FieldLabel.vue";
import { Input } from "./ui/input";
import FieldError from "./ui/field/FieldError.vue";
import Textarea from "./ui/textarea/Textarea.vue";
</script>

<template>
  <div>
    <VeeField v-slot="{ handleChange, errors }" name="profilePic">
      <Field :data-invalid="!!errors.length">
        <FieldLabel> Profile Picture </FieldLabel>
        <Input
          type="file"
          @change="handleChange"
          :aria-invalid="!!errors.length"
        />
        <FieldError v-if="!!errors.length" :errors="errors" />
      </Field>
    </VeeField>

    <VeeField v-slot="{ componentField, errors }" name="name">
      <Field :data-invalid="!!errors.length">
        <FieldLabel> Name </FieldLabel>
        <Input
          type="text"
          v-bind="componentField"
          :aria-invalid="!!errors.length"
        />
        <FieldError v-if="!!errors.length" :errors="errors" />
      </Field>
    </VeeField>

    <VeeField v-slot="{ componentField, errors }" name="role">
      <Field :data-invalid="!!errors.length">
        <FieldLabel> Role </FieldLabel>
        <Input
          type="text"
          v-bind="componentField"
          :aria-invalid="!!errors.length"
        />
        <FieldError v-if="!!errors.length" :errors="errors" />
      </Field>
    </VeeField>

    <VeeField v-slot="{ componentField, errors }" name="company">
      <Field :data-invalid="!!errors.length">
        <FieldLabel> Company </FieldLabel>
        <Input
          type="text"
          v-bind="componentField"
          :aria-invalid="!!errors.length"
        />
        <FieldError v-if="!!errors.length" :errors="errors" />
      </Field>
    </VeeField>

    <VeeField v-slot="{ componentField, errors }" name="testimony">
      <Field :data-invalid="!!errors.length">
        <FieldLabel> Testimony </FieldLabel>
        <Textarea
          placeholder="write a testimonial here ..."
          v-bind="componentField"
          :aria-invalid="!!errors.length"
        />
        <FieldError v-if="!!errors.length" :errors="errors" />
      </Field>
    </VeeField>
  </div>
</template>
