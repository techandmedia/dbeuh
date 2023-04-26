export default function handler(req, res) {
  res.status(200).json({
    data: 'Welcome to Next.js!',
    statusCode: 200,
    isLoading: false,
    title: 'Success',
    message: 'Data successfully fetched',
  });
}
