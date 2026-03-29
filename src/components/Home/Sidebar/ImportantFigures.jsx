import ImportantFigureCard from "@/components/Common/ImportantFigureCard";

const ImportantFigures = () => {
  return (
    <div className="pt-2">
      <ImportantFigureCard
        name={"জনাব আ ন ম এহছানুল হক মিলন"}
        designation="মাননীয় মন্ত্রী,শিক্ষা মন্ত্রণালয়"
        image="1.jpg"
      />
      <ImportantFigureCard
        name={"জনাব ববি হাজ্জাজ"}
        designation="মাননীয় প্রতিমন্ত্রী,শিক্ষা মন্ত্রণালয়"
        image="2.jpg"
      />
      <ImportantFigureCard
        name={"Ripon Hasan"}
        designation="অধ্যক্ষ"
        image="3.jpg"
      />
    </div>
  );
};

export default ImportantFigures;
