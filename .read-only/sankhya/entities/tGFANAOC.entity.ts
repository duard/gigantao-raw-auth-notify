import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfocrEntity } from './tGFOCR.entity';

@Index('PK__TGFANAOC__B693E6E77A751523', ['codanalise'], { unique: true })
@Index('UQ__TGFANAOC__55F6417F29994F75', ['codorigem'], { unique: true })
@Entity('TGFANAOC', { schema: 'SANKHYA' })
export class TgfanaocEntity {
  @Column('int', { primary: true, name: 'CODANALISE' })
  codanalise: number;

  @Column('int', { name: 'CODORIGEM', nullable: true, unique: true })
  codorigem: number | null;

  @Column('varchar', { name: 'ORIGEM', length: 2 })
  origem: string;

  @Column('int', { name: 'CODPDV' })
  codpdv: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'GERATITULO', length: 1, default: () => "'N'" })
  geratitulo: string;

  @Column('varchar', { name: 'FINGERADO', length: 1, default: () => "'N'" })
  fingerado: string;

  @Column('varchar', { name: 'HISTOCORRENCIA', length: 3103 })
  histocorrencia: string;

  @Column('money', { name: 'VALOR' })
  valor: number;

  @Column('varchar', { name: 'MOTIVOFIN', nullable: true, length: 3103 })
  motivofin: string | null;

  @Column('int', { name: 'NUCONF' })
  nuconf: number;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 40 })
  razaosocial: string | null;

  @Column('datetime', { name: 'DTOCORRENCIA' })
  dtocorrencia: Date;

  @OneToOne(() => TgfocrEntity, (tgfocrEntity) => tgfocrEntity.tgfanaoc, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODORIGEM', referencedColumnName: 'codorigem' }])
  codorigem2: TgfocrEntity;
}
