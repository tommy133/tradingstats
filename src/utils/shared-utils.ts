// Convert the date strings to Date objects in your local timezone
export function convertDatesToLocalTime(items: any[]): void {
    items.forEach((item) => {
      if (item.date) {
        const utcDate = new Date(item.date);
        const localDate = new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60000);
        item.date = localDate.toISOString(); // Convert it back to ISO 8601 with local timezone
      }
    });
  }
  