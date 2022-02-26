<script lang="tsx">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    columnCount: {
      type: Number,
      default: 3
    },
    columnGap: {
      type: String,
      default: '15px'
    }
  },
  setup(props, { slots }) {
    const style = computed(() => {
      return {
        'columnCount': props.columnCount,
        'columnGap': props.columnGap
      }
    })
    return () => (
      <div class="u-waterfall" style={style.value}>
        {slots.default?.()}
      </div>
    )
  }
})
</script>

<style>
.u-waterfall > *{
  width: 100%;
  height: 100%;
  object-fit: fill;
  break-inside: avoid;
}
</style>