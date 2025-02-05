"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { quizQuestions } from "@/data/quiz-questions";

export function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | string[])[]>([]);
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedUnBlend");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasVisitedUnBlend", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

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
    setIsOpen(false);
    localStorage.setItem("hasVisitedUnBlend", "true");
    window.location.href = `/recommendations?answers=${encodedAnswers}`;
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-unblend-blue via-unblend-navy to-purple-600 p-0 border-none rounded-2xl overflow-hidden">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10 bg-white/10 backdrop-blur-sm"
          >
            <X className="h-6 w-6" />
          </motion.button>

          {!hasStarted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8 p-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <h2
                  className="text-6xl font-bold"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "'Quicksand', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  UnBlend
                </h2>
              </motion.div>
              <h2 className="text-5xl font-bold text-white">
                Discover Your
                <br />
                Perfect Blend
              </h2>

              <p className="text-2xl text-white/90">Find your perfect milk?</p>

              <div className="h-px bg-white/20 my-8" />

              <h3 className="text-3xl font-semibold text-white">
                Discover the milk that's just right for you!
              </h3>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setHasStarted(true)}
                className="w-full py-4 px-8 text-xl font-semibold text-unblend-navy rounded-full bg-white hover:bg-white/90 transition-all transform shadow-lg"
              >
                Start Your UnBlend Journey!
              </motion.button>
            </motion.div>
          ) : (
            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8">
                <div className="mb-6">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      style={{ width: `${progress}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {quizQuestions[currentQuestion].question}
                </h3>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8"
                >
                  {quizQuestions[currentQuestion].type === "single" ? (
                    <RadioGroup className="space-y-4">
                      {quizQuestions[currentQuestion].options.map(
                        (option, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-2 p-4 rounded-lg border border-gray-200 hover:border-unblend-blue/40 hover:bg-unblend-blue/5 transition-colors cursor-pointer"
                            onClick={() => handleSingleAnswer(option)}
                          >
                            <RadioGroupItem
                              value={option}
                              id={`option-${index}`}
                              className="border-gray-400 text-unblend-blue data-[state=checked]:border-unblend-blue data-[state=checked]:text-unblend-blue"
                            />
                            <Label
                              htmlFor={`option-${index}`}
                              className="text-gray-800 cursor-pointer"
                            >
                              {option}
                            </Label>
                          </motion.div>
                        )
                      )}
                    </RadioGroup>
                  ) : (
                    <div className="space-y-4">
                      {quizQuestions[currentQuestion].options.map(
                        (option, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-2 p-4 rounded-lg border border-gray-200 hover:border-unblend-blue/40 hover:bg-unblend-blue/5 transition-colors cursor-pointer"
                          >
                            <Checkbox
                              id={`option-${index}`}
                              className="border-gray-400 text-unblend-blue data-[state=checked]:border-unblend-blue data-[state=checked]:bg-unblend-blue data-[state=checked]:text-white"
                              onCheckedChange={(checked) => {
                                const currentAnswers =
                                  (answers[currentQuestion] as string[]) || [];
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
                              className="text-gray-800 cursor-pointer"
                            >
                              {option}
                            </Label>
                          </motion.div>
                        )
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="bg-white p-8">
                {currentQuestion === quizQuestions.length - 1 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-6 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-unblend-blue via-unblend-navy to-purple-600 hover:from-unblend-blue/90 hover:via-unblend-navy/90 hover:to-purple-600/90 transition-all transform shadow-md"
                    onClick={handleComplete}
                  >
                    Discover Your Blend{" "}
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-6 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-unblend-blue to-unblend-navy hover:from-unblend-blue/90 hover:to-unblend-navy/90 transition-all transform shadow-md"
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </motion.button>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
