// product interface
class Report {
  generate() {
    throw new Error("report method must be implemented");
  }
}

class PDFReport extends Report {
  generate() {
    console.log("generating report in pdf format...");
    setTimeout(() => {
      console.log("report in pdf format generated successfully");
    }, 2000);
  }
}

class ExcelReport extends Report {
  generate() {
    console.log("generating report in excel format...");
    setTimeout(() => {
      console.log("report in excel format generated successfully");
    }, 2000);
  }
}

// factory interface
class ReportFactory {
  createReport() {
    throw new Error("createReport method must be implemented");
  }
}

class PDFReportFactory extends ReportFactory {
  createReport() {
    return new PDFReport();
  }
}

class ExcelReportFactory extends ReportFactory {
  createReport() {
    return new ExcelReport();
  }
}

// client
function clientCode(reporterCreator) {
  const report = reporterCreator.createReport();
  report.generate();
}

clientCode(new PDFReportFactory());
