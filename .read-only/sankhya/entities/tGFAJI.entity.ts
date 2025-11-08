import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFAJI', ['nunota'], { unique: true })
@Entity('TGFAJI', { schema: 'SANKHYA' })
export class TgfajiEntity {
  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 5 })
  serienota: string | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('datetime', { name: 'DTDOC' })
  dtdoc: Date;

  @Column('int', { name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('varchar', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  digitado: string | null;

  @Column('float', { name: 'VLRAJUSTE', precision: 53, default: () => '(0)' })
  vlrajuste: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @Column('varchar', { name: 'TIPIMPOSTO', length: 1, default: () => "'P'" })
  tipimposto: string;

  @Column('int', { name: 'CODAJUSTE', default: () => '(99)' })
  codajuste: number;

  @Column('int', { name: 'ORIGPROCESSO', default: () => '(3)' })
  origprocesso: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;
}
