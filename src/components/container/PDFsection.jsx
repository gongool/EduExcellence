


const styles = {
    arabicFont: {
      fontFamily: '"Simplified Arabic", sans-serif',
    },
  };
  
  export const PDFsection = () => (
    <div className="pdf-section mt-12 max-w-[700px] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Educational Awareness</h2>
      <div className="resource-item flex items-center mb-4">
        <img src="/src/assets/icon.png" alt="PDF Icon" className="w-12 h-12 mr-4" />
        <div>
          <a href="path/to/your/english/pdf/file.pdf" target="_blank" className="text-blue-600 hover:underline">
            The Difference Between Traditional Education and Online Education
          </a>
          <p className="text-sm text-gray-600">
            Understand the key differences between online and offline education methods
          </p>
        </div>
      </div>
      <div className="resource-item flex items-center mt-4">
        <img src="/src/assets/icon.png" alt="PDF Icon" className="w-12 h-12 mr-4" />
        <div>
          <a href="/" target="_blank" className="text-blue-600 hover:underline" style={styles.arabicFont}>
            الفرق بين التعليم التقليدي والتعليم عبر الإنترنت
          </a>
          <p className="text-sm text-gray-600 " style={styles.arabicFont}>
            فهم الفروق الرئيسية بين أساليب التعليم التقليدي والتعليم عبر الانترنت
          </p>
        </div>ل
      </div>
    </div>
  );
  