export const ISOtoDate = (iso) => {
    const date = new Date(iso);
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const dateString = months[date.getMonth()+1] + " " + (date.getDate()).toString() + ", " + (date.getFullYear()).toString();
 
    return dateString;
}