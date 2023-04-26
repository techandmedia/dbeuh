export default function handler(req, res) {
  const { page = 1, pageSize = 10 } = req.body;
  const totalItems = 500;
  const data = [];

  for (let i = 1; i <= pageSize; i++) {
    const id = (page - 1) * pageSize + i;
    data.push({
      id,
      name: `John Doe ${id}`,
      email: `johndoe${id}@example.com`,
    });
  }

  res.status(200).json({
    data,
    statusCode: 200,
    isLoading: false,
    title: 'Success',
    message: 'Data successfully fetched',
    pagination: {
      currentPage: page,
      pageSize,
      totalItems,
    },
  });
}
