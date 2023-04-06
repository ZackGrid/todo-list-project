import { format } from "date-fns";

const content = document.querySelector('.content');

const today = new Date();
const formattedDate = format(today, 'PPPP');

content.textContent = formattedDate;