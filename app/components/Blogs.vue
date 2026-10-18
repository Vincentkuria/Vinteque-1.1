<script setup lang="ts">
import { Delete, Edit, PlusCircle, Trash2 } from "lucide-vue-next";
import { useForm, Field as VeeField } from "vee-validate";
import Field from "./ui/field/Field.vue";
import FieldLabel from "./ui/field/FieldLabel.vue";
import Input from "./ui/input/Input.vue";
import FieldError from "./ui/field/FieldError.vue";
import Select from "./ui/select/Select.vue";
import SelectTrigger from "./ui/select/SelectTrigger.vue";
import SelectValue from "./ui/select/SelectValue.vue";
import SelectContent from "./ui/select/SelectContent.vue";
import SelectLabel from "./ui/select/SelectLabel.vue";
import SelectItem from "./ui/select/SelectItem.vue";

const currentPage = ref(1);
const pageSize = ref(10);

const { data, refresh, status } = await useFetch(
  useRuntimeConfig().public.baseUrl + "/blogs",
  {
    method: "GET",
    query: () => ({
      page: currentPage.value - 1,
      size: pageSize.value,
    }),
  },
);

const deleteBlog = (id: string) => {};
</script>

<template>
  <div class="w-full h-[90%] p-2">
    <UiDrawer>
      <UiDrawerTrigger>
        <UiButton class="mb-2"> <PlusCircle /> <span>New Blog</span> </UiButton>
      </UiDrawerTrigger>
      <UiDrawerContent class="block">
        <UiDrawerHeader>
          <UiDrawerTitle>New Blog</UiDrawerTitle>
          <UiDrawerDescription>Writing a new blog</UiDrawerDescription>
        </UiDrawerHeader>
        <div>
          <form>
            <VeeField v-slot="{ componentField, errors }" name="title">
              <Field :data-invalid="!!errors.length">
                <FieldLabel> Title </FieldLabel>
                <Input
                  type="text"
                  v-bind="componentField"
                  :aria-invalid="!!errors.length"
                />
                <FieldError v-if="!!errors.length" />
              </Field>
            </VeeField>

            <VeeField v-slot="{ handleChange, errors }" name="heroImg">
              <Field :data-invalid="!!errors.length">
                <FieldLabel> Hero Section Image </FieldLabel>
                <Input
                  type="file"
                  @change="handleChange"
                  :aria-invalid="!!errors.length"
                />
              </Field>
            </VeeField>

            <VeeField v-slot="{ componentField, errors }" name="status">
              <Field :data-invalid="!!errors.length">
                <FieldLable> Status </FieldLable>
              </Field>
              <Select v-bind="componentField" :aria-invalid="!!errors.length">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectLabel>Select status</SelectLabel>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </VeeField>

            <VeeField v-slot="{ componentField, errors }" name="body">
            </VeeField>
          </form>
        </div>
      </UiDrawerContent>
    </UiDrawer>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="item in (data as any)?.content">
        <UiDrawer>
          <UiDrawerTrigger as-child>
            <div
              class="w-full h-96 bg-white rounded-2xl shadow-lg shadow-gray-300 hover:cursor-pointer transition-all duration-200"
            >
              <div class="h-[60%] w-full bg-green-400">
                <NuxtImg
                  format="webp"
                  alt="blog image"
                  :src="useRuntimeConfig().public.baseUrl + `/${item.heroImg}`"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div class="p-3">
                <span class="font-mono text-sm">{{
                  simplifyDate(item.createdAt)
                }}</span>
                <h2 class="w-full font-Berlin-sans-fb text-lg line-clamp-2">
                  {{ item.title }}
                </h2>
              </div>
              <div class="flex justify-end">
                <div class="w-fit h-fit m-2">
                  <UiButton size="icon" class="me-2">
                    <Edit :size="16" />
                  </UiButton>

                  <UiAlertDialog>
                    <UiAlertDialogTrigger as-child>
                      <UiButton>
                        <Trash2 :size="16" />
                      </UiButton>
                    </UiAlertDialogTrigger>

                    <UiAlertDialogContent>
                      <UiAlertDialogHeader>
                        <UiAlertDialogTitle
                          >Are you sure you want to delete?</UiAlertDialogTitle
                        >
                        <UiAlertDialogDescription>
                          Note: Blogs deleted can not be recovered
                        </UiAlertDialogDescription>
                      </UiAlertDialogHeader>
                      <UiAlertDialogFooter>
                        <UiAlertDialogCancel> No </UiAlertDialogCancel>
                        <UiAlertDialogAction @click="deleteBlog(item.id)">
                          Yes
                        </UiAlertDialogAction>
                      </UiAlertDialogFooter>
                    </UiAlertDialogContent>
                  </UiAlertDialog>
                </div>
              </div>
            </div>
          </UiDrawerTrigger>

          <UiDrawerContent class="">
            <div class="px-5 md:px-20 my-5 overflow-y-scroll">
              <h1 class="font-Berlin-sans-fb text-3xl md:text-5xl">
                {{ item.title }}
              </h1>
              <span class="font-mono text-sm">{{
                simplifyDate(item.createdAt)
              }}</span>
              <div class="my-5 w-full h-[40vh] md:h-[60vh] bg-gray-400">
                <NuxtImg
                  format="webp"
                  alt="blog top display image"
                  :src="useRuntimeConfig().public.baseUrl + `/${item.heroImg}`"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- blogs body -->
              <!--TODO add quill editor and use its class-->
              <div v-html="item.body" class="reset-tw my-10" />
            </div>
          </UiDrawerContent>
        </UiDrawer>
      </div>
    </div>
  </div>

  <div class="w-full h-[10%]">
    <UiPagination
      v-slot="{ page }"
      v-model:page="currentPage"
      :items-per-page="pageSize"
      :total="(data as any)?.totalElements"
      :default-page="1"
    >
      <UiPagination-content v-slot="{ items }">
        <UiPagination-previous />
        <template v-for="(item, index) in items" :key="index">
          <UiPaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </UiPaginationItem>
        </template>
        <UiPagination-ellipsis :Index="4" />
        <UiPagination-next />
      </UiPagination-content>
    </UiPagination>
  </div>
</template>

<style scoped>
.reset-tw,
.reset-tw * {
  all: revert !important;
}
</style>
