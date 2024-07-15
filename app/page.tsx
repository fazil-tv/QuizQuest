"use client"
import DropDownOption from "@/components/DropDownOption";
import Header from "@/components/header";
import { Input } from "@/components/ui/input"
import useQuiz from "./store";

export default function Home() {

  const quizConfig = useQuiz((state) => state.config)
  console.log(quizConfig, "oooops")
  const addNumberOfQuestions = useQuiz((state) => state.addNumberOfQuestions)
  const addStatus = useQuiz(state => state.addStatus)



  return (

    <>
      <Header />
      <div className="max-w-screen-xl flex-wrap items-center mx-auto p-4 flex justify-center mt-10">
        <h1 className="mb-4 mt-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-5xl ">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">QuizQuest...</span></h1>
      </div>
      <div className="max-w-screen-xl flex-wrap items-center mx-auto p-4 flex justify-center ">
        <div className="p-10 my-10 rounded-lg shadow-xl w-[65%] bg-white">
          <div className="pt-5">
            <Input placeholder="number of questions" className="mt-5 " type="number" defaultValue={10} min={0} max={15} onChange={(e) => addNumberOfQuestions(e.target.value)} />
          </div>
          <div className="pt-5 w-full ">
            <DropDownOption />
            <div className="flex justify-center">
              <button type="button" onClick={() => addStatus("start")} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-80">Start Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
