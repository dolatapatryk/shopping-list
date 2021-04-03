export class ServiceHelper {

    static getNextId(items: any[]): number {
        if (!items || !items.length) {
            return 1;
        }
        let max = 0;
        for (const item of items) {
            if (item.id > max) {
                max = item.id;
            }
        }
        return max + 1;
    }
}
