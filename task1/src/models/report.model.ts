export interface QueryResult {
  totalAmount: number;
  records: any[];
}

class Report {
  private static reportData: any[] = [];

  constructor() {
    Report.reportData = [];
  }

  static save(data: any[]): void {
    Report.reportData = data;
  }

  static queryByTimeRange(startTime: string, endTime: string): QueryResult {
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error(
        "Invalid date format. Please provide a valid start and end time."
      );
    }

    const filteredData = Report.reportData.filter((record) => {
      const [day, month, year] = record.date.split("/");
      const formattedDate = `${year}-${month}-${day}`; // Convert to ISO format (YYYY-MM-DD)

      const recordTimeString = `${formattedDate}T${record.time}`;
      const recordTime = new Date(recordTimeString);

      return recordTime >= start && recordTime <= end;
    });

    const totalAmount = filteredData.reduce(
      (sum, record) => sum + (record.totalPrice || 0),
      0
    );

    return {
      totalAmount,
      records: filteredData,
    };
  }
}

export default Report;
