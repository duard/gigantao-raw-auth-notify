import { Column, Entity, Index } from 'typeorm';

@Index('TCSEVC_PK', ['codparc', 'codevento', 'dhinclusao', 'seqevento'], {
  unique: true,
})
@Entity('TCSEVC', { schema: 'SANKHYA' })
export class TcsevcEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('datetime', {
    primary: true,
    name: 'DHINCLUSAO',
    default: () => 'getdate()',
  })
  dhinclusao: Date;

  @Column('datetime', { name: 'DHPROCESS', nullable: true })
  dhprocess: Date | null;

  @Column('int', { primary: true, name: 'SEQEVENTO', default: () => '(0)' })
  seqevento: number;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 2 })
  ativo: string | null;

  @Column('int', { name: 'DIASTOLERANCIA', nullable: true })
  diastolerancia: number | null;

  @Column('int', { name: 'TENTENVIO', nullable: true })
  tentenvio: number | null;
}
