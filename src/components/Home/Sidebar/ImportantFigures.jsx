import ImportantFigureCard from "@/components/Common/ImportantFigureCard";

const ImportantFigures = () => {
  return (
    <div className="pt-2">
      <ImportantFigureCard
        name={"Md Sahin"}
        designation="জেলা প্রশাসক"
        image="2.jpg"
      />
      <ImportantFigureCard
        name={"Tarek Rahman"}
        designation="প্রতিষ্ঠাতা"
        image="1.jpg"
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