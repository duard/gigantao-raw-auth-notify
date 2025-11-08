import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFPAXN', ['codparc', 'sequencia'], { unique: true })
@Entity('TGFPAXN', { schema: 'SANKHYA' })
export class TgfpaxnEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 40 })
  nomeparc: string | null;

  @Column('int', { name: 'CODPARXN', nullable: true })
  codparxn: number | null;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 14 })
  cpfcnpj: string | null;

  @Column('varchar', { name: 'TIPOENVIO', nullable: true, length: 20 })
  tipoenvio: string | null;

  @Column('varchar', { name: 'TIPOPARCEIRO', nullable: true, length: 20 })
  tipoparceiro: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpaxns)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
