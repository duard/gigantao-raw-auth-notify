import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFREJ', ['codrej', 'codigo', 'codocorrencia', 'sequencia'], {
  unique: true,
})
@Entity('TGFREJ', { schema: 'SANKHYA' })
export class TgfrejEntity {
  @Column('char', { primary: true, name: 'CODREJ', length: 4 })
  codrej: string;

  @Column('char', { name: 'DESCRREJ', length: 90 })
  descrrej: string;

  @Column('int', { primary: true, name: 'CODIGO', default: () => '(0)' })
  codigo: number;

  @Column('char', {
    primary: true,
    name: 'CODOCORRENCIA',
    length: 5,
    default: () => "' '",
  })
  codocorrencia: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;
}
