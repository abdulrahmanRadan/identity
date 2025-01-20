import PropTypes from "prop-types";

const SearchResults = ({ imageResults, errorMessage }) => {
  return (
    <div className="mt-4 flex w-full justify-center">
      {errorMessage && ( // عرض رسالة الخطأ إذا كانت موجودة
        <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-md">
          {errorMessage}
        </div>
      )}

      {imageResults.length > 0 ? (
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold mb-4 text-center ">نتائج البحث</h2>
          <div className="flex gap-6">
            {/* الجهة اليسرى: بيانات الطالب */}
            <div className="w-1/2 p-2  border border-gray-300 rounded-lg bg-gray-50 text-center">
              <h3 className="text-lg font-bold mb-4 p-4 border border-sky-200 rounded-sm shadow-md">
                بيانات الطالب
              </h3>
              {imageResults.map((student, index) => (
                <div key={index} className="mb-6 mr-[-40px] p-2">
                  <div className="flex items-center gap-4">
                    <img
                      src={`http://127.0.0.1:8080/static/${student.ImagePath}`}
                      alt="Student"
                      className="w-1/2  rounded-md border-2 border-gray-300"
                    />
                    <div className="rtl">
                      <div className="flex justify-between">
                        <p className="text-left">{student.StudentName}</p>
                        <p className="text-right">
                          <strong>الاسم</strong>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left">{student.College}</p>
                        <p className="text-right">
                          <strong>الكلية</strong>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left">{student.Specialization}</p>
                        <p className="text-right">
                          <strong>التخصص</strong>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left">{student.Level}</p>
                        <p className="text-right">
                          <strong>المستوى</strong>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left">
                          <p className="text-right">
                            <strong>درجة التشابه</strong>
                          </p>
                          {student.similarity.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* الجهة اليمنى: بيانات الاختبار */}
            <div className="w-1/2 p-4 border border-gray-300 rounded-lg bg-gray-50 text-center">
              <h3 className="text-lg font-bold mb-4 p-4 border border-sky-200 rounded-sm shadow-md">
                بيانات الاختبار
              </h3>
              {imageResults.map((student, index) => (
                <div key={index} className="mb-6">
                  <p>
                    <strong>المادة:</strong> رياضيات
                  </p>
                  <p>
                    <strong>التاريخ:</strong> 2025-01-25
                  </p>
                  <p>
                    <strong>الوقت:</strong> 10:00 صباحًا
                  </p>
                  <p>
                    <strong>القاعة:</strong> 101
                  </p>
                  <p>
                    <strong>المستوى:</strong> {student.Level}
                  </p>
                  <p>
                    <strong>التخصص:</strong> {student.Specialization}
                  </p>
                  <p>
                    <strong>الحالة:</strong> مسموح
                  </p>
                  <p>
                    <strong>رقم الجهاز:</strong> 5
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        !errorMessage && ( // عرض رسالة إذا لم تكن هناك نتائج
          <div className="bg-yellow-100 text-yellow-700 p-4 mb-4 rounded-md">
            لا توجد نتائج للعرض.
          </div>
        )
      )}
    </div>
  );
};

SearchResults.propTypes = {
  imageResults: PropTypes.array.isRequired,
  errorMessage: PropTypes.string, // إضافة PropTypes لـ errorMessage
};

export default SearchResults;
