import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TGFRUP', ['nurup'], { unique: true })
@Index('TGFRUP_I01', ['codprod', 'codemp', 'codlocal'], {})
@Entity('TGFRUP', { schema: 'SANKHYA' })
export class TgfrupEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'NURUP' })
  nurup: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 100 })
  controle: string | null;
}
