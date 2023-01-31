import { type ContentWriterOptions } from '../../types';

export const writeDecimalJsLikeList = ({
  fileWriter: { writer, writeImport },
  dmmf,
  getSingleFileContent = false,
}: ContentWriterOptions) => {
  const { useMultipleFiles } = dmmf.generatorConfig;

  if (useMultipleFiles && !getSingleFileContent) {
    writeImport('{ z }', 'zod');
  }

  writer
    .blankLine()
    .writeLine(
      `export const DecimalJSLikeListSchema = z.object({ d: z.array(z.number()), e: z.number(), s: z.number() }).array();`,
    );

  if (useMultipleFiles && !getSingleFileContent) {
    writer.blankLine().writeLine(`export default DecimalJSLikeListSchema;`);
  }
};