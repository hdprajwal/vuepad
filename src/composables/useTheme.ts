import {ref, onMounted, watch} from 'vue';

export function useTheme() {
    const theme = ref(localStorage.getItem('theme') || 'dark');
    
    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
    };
    
    const applyTheme = (value: string) => {
        if (value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', value);
    };

    onMounted(() => {
        applyTheme(theme.value);
    });
    watch(theme, () => {
        applyTheme(theme.value);
    });
    return {theme, toggleTheme};
}