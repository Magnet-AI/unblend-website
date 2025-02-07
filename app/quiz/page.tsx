"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { quizQuestions } from "@/data/quiz-questions";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | string[])[]>([]);
  const router = useRouter();

  const handleSingleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleMultipleAnswer = (answer: string[]) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleComplete = () => {
    const encodedAnswers = encodeURIComponent(JSON.stringify(answers));
    router.push(`/recommendations?answers=${encodedAnswers}`);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-unblend-blue via-unblend-navy to-purple-600 py-12 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] bg-clip-text text-transparent">
                    Find Your Perfect Blend
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Discover the milk that&apos;s just right for your body!
                  </p>
                </div>

                <div className="mb-8">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA]"
                      style={{ width: `${progress}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h3>

                    {quizQuestions[currentQuestion].type === "single" ? (
                      <RadioGroup
                        className="space-y-4"
                        onValueChange={handleSingleAnswer}
                      >
                        {quizQuestions[currentQuestion].options.map(
                          (option, index) => (
                            <div key={index} className="relative">
                              <RadioGroupItem
                                value={option}
                                id={`option-${index}`}
                                className="peer absolute opacity-0"
                              />
                              <Label
                                htmlFor={`option-${index}`}
                                className="block p-4 rounded-xl border border-gray-200 cursor-pointer transition-all hover:border-[#1E3A8A]/30 hover:bg-[#1E3A8A]/5 peer-data-[state=checked]:border-[#1E3A8A] peer-data-[state=checked]:bg-[#1E3A8A]/5"
                              >
                                {option}
                              </Label>
                            </div>
                          )
                        )}
                      </RadioGroup>
                    ) : (
                      <div className="space-y-4">
                        {quizQuestions[currentQuestion].options.map(
                          (option, index) => (
                            <div key={index} className="relative">
                              <Checkbox
                                id={`option-${index}`}
                                className="peer absolute opacity-0"
                                onCheckedChange={(checked) => {
                                  const currentAnswers =
                                    (answers[currentQuestion] as string[]) ||
                                    [];
                                  if (checked) {
                                    handleMultipleAnswer([
                                      ...currentAnswers,
                                      option,
                                    ]);
                                  } else {
                                    handleMultipleAnswer(
                                      currentAnswers.filter((a) => a !== option)
                                    );
                                  }
                                }}
                              />
                              <Label
                                htmlFor={`option-${index}`}
                                className="block p-4 rounded-xl border border-gray-200 cursor-pointer transition-all hover:border-[#1E3A8A]/30 hover:bg-[#1E3A8A]/5 peer-data-[state=checked]:border-[#1E3A8A] peer-data-[state=checked]:bg-[#1E3A8A]/5"
                              >
                                {option}
                              </Label>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    <div className="mt-8 flex justify-between gap-4">
                      {currentQuestion > 0 && (
                        <Button
                          className="flex-1 py-6 text-lg font-semibold text-white rounded-xl bg-unblend-navy hover:bg-unblend-navy/90 transition-all"
                          onClick={handlePreviousQuestion}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                      )}
                      {currentQuestion === quizQuestions.length - 1 ? (
                        <Button
                          className="flex-1 py-6 text-lg font-semibold text-white rounded-xl bg-unblend-navy hover:bg-unblend-navy/90 transition-all"
                          onClick={handleComplete}
                        >
                          See Results <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          className="flex-1 py-6 text-lg font-semibold text-white rounded-xl bg-unblend-navy hover:bg-unblend-navy/90 transition-all"
                          onClick={() =>
                            setCurrentQuestion((prev) =>
                              Math.min(prev + 1, quizQuestions.length - 1)
                            )
                          }
                        >
                          Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
