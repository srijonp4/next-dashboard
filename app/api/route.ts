async function simulateRequest(): Promise<{
  success: boolean;
}> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return {
    success: true,
  };
}

export async function GET() {
  try {
    const data = await simulateRequest();
    return Response.json({
      ...data,
      message: 'why are you g..?',
    });
  } catch (err) {
    return Response.json(
      { err },
      {
        status: 500,
        statusText: 'internal server error',
      }
    );
  }
}
