<template>
  <div class="input-container flex gap-2 mb-3">
    <input
      type="file"
      id="file"
      accept="image/*"
      hidden
      ref="inputFile"
    >
    <div
      class="img-area flex items-center gap-5"
      data-img=""
    >
      <div
        class="img-preview"
        ref="imgAreaPreview"
      ></div>
      <div class="label-container">
        <p class="my-3 text-theme-text-clr">Select your personal profile picture</p>
        <button
          class="select-image border w-fit px-5 py-3 font-bold text-sm bg-theme-fill-clr text-white outline-none rounded-xl focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-theme-checkbox-clr"
          ref="selectImage"
        >
          Select Image
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string,
  type: string,
  id: string,
  name: string,
  modelValue?: string,
  accepts?: string,
  required?: 'true' | 'false'
  placeholder?: string,
}>()

defineEmits(['update:modelValue'])

const selectImage: Ref<null | HTMLButtonElement> = ref(null);
const inputFile: Ref<null | HTMLInputElement> = ref(null)
const imgAreaPreview: Ref<null | HTMLDivElement> = ref(null)

onMounted(() => {
  if (selectImage.value !== null && inputFile.value !== null && imgAreaPreview.value !== null) {
    const selectImageElement = selectImage.value as HTMLButtonElement
    const inputFileElement = inputFile.value as HTMLInputElement
    const imgAreaPreviewElement = imgAreaPreview.value as HTMLDivElement

    console.log(selectImageElement);

    selectImageElement.addEventListener('click', function () {
      inputFileElement.click();
    })

    inputFileElement.addEventListener('change', function () {
      const files = inputFileElement.files as FileList
      const image = files[0]
      if (image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
          const allImg = imgAreaPreviewElement.querySelectorAll('img');
          allImg.forEach(item => item.remove());
          const imgUrl = reader.result as string;
          const img = document.createElement('img');
          img.src = imgUrl;
          imgAreaPreviewElement.appendChild(img);
          imgAreaPreviewElement.classList.add('active');
          imgAreaPreviewElement.dataset.img = image.name;
        }
        reader.readAsDataURL(image);
      } else {
        alert("Image size more than 2MB");
      }
    })
  }
})


</script>

<style lang="scss" scoped>
.img-preview {
  position: relative;
  width: 100px;
  height: 100px;
  background: #ddd;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.img-area h3 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 6px;
}


.img-area img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 100;
}

.img-area::before {
  content: attr(data-img);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  color: #fff;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: all .3s ease;
  z-index: 200;
}

.img-area.active:hover::before {
  opacity: 1;
}

.select-image {
  border: none;
  cursor: pointer;
  transition: all .3s ease;
}
</style>
