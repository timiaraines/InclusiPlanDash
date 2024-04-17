import { db } from './firebase'; // Ensure this is the correct path
import { collection, addDoc } from 'firebase/firestore';

const fakeIEPs = [
  {
    title: "IEP 1",
    studentName: "John Doe",
    date: "2024-01-01",
    goals: ["Improve math skills", "Enhance reading comprehension"]
  },
  {
    title: "IEP 2",
    studentName: "Jane Smith",
    date: "2024-02-15",
    goals: ["Increase physical activity", "Develop social skills"]
  },
  {
    title: "IEP 3",
    studentName: "Alice Johnson",
    date: "2024-03-20",
    goals: ["Improve writing skills", "Better time management"]
  },
  {
    title: "IEP 4",
    studentName: "Mark Brown",
    date: "2024-04-25",
    goals: ["Enhance artistic skills", "Develop critical thinking"]
  },
  {
    title: "IEP 5",
    studentName: "Emily Clark",
    date: "2024-05-30",
    goals: ["Strengthen scientific reasoning", "Learn new languages"]
  },
  {
    title: "IEP 6",
    studentName: "Charlie Adams",
    date: "2024-06-15",
    goals: ["Enhance physical education", "Improve social interactions"]
  },
  {
    title: "IEP 7",
    studentName: "Sophia Lopez",
    date: "2024-07-21",
    goals: ["Increase musical skills", "Strengthen mathematical understanding"]
  },
  {
    title: "IEP 8",
    studentName: "Liam Wilson",
    date: "2024-08-18",
    goals: ["Develop programming skills", "Advance scientific experiments"]
  },
  {
    title: "IEP 9",
    studentName: "Isabella Martinez",
    date: "2024-09-22",
    goals: ["Enhance historical knowledge", "Improve geographical skills"]
  },
  {
    title: "IEP 10",
    studentName: "Michael Hernandez",
    date: "2024-10-27",
    goals: ["Develop debate skills", "Learn more about physics"]
  }
];

const addIEPToFirestore = async (iep) => {
  try {
    await addDoc(collection(db, "ieps"), iep);
    console.log("Document added: ", iep.title);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

fakeIEPs.forEach(addIEPToFirestore);
