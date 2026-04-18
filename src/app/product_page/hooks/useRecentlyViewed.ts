const STORAGE_KEY = 'recent_products';
const MAX_ITEMS = 10;

export function useRecentlyViewed() {
    const addProduct = (productId: string) => {
        if (typeof window === 'undefined') return;

        const raw = localStorage.getItem(STORAGE_KEY);
        let items: string[] = raw ? JSON.parse(raw) : [];

        if (items[0] === productId) return;

        items = items.filter(id => id !== productId);

        items.unshift(productId);

        if (items.length > MAX_ITEMS) {
            items = items.slice(0, MAX_ITEMS);
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    };

    const getProducts = (): string[] => {
        if (typeof window === 'undefined') return [];
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    };

    return {
        addProduct,
        getProducts
    };
}