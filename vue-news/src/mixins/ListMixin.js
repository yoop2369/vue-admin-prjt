import bus from '@/utils/bus.js'
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    // created() {
    //   bus.$emit('start:spinner')
    //   this.$store.dispatch('FETCH_LIST', this.$route.name)
    //     .then(() => {
    //       console.log('fetched')
    //       bus.$emit('end:spinner')
    //     })
    //     .catch(error => {
    //       console.log('error')
    //     })
    // }
    mounted () {
      bus.$emit('end:spinner');
    },
}