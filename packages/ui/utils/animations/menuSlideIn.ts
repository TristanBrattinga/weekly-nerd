const menuSlideIn = (inView: boolean) => ({
    'ease duration-700 transition-all transform-gpu': true,
    'opacity-0 translate-y-[100%]': !inView,
    'opacity-100 translate-y-0': inView,
})

export default menuSlideIn
