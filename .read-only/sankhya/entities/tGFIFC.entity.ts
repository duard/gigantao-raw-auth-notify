import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfftcEntity } from './tGFFTC.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFIFC', ['nuftc', 'nufin'], { unique: true })
@Entity('TGFIFC', { schema: 'SANKHYA' })
export class TgfifcEntity {
  @Column('int', { primary: true, name: 'NUFTC' })
  nuftc: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('float', { name: 'VLRTOTITEM', nullable: true, precision: 53 })
  vlrtotitem: number | null;

  @Column('varchar', { name: 'PARCELA', nullable: true, length: 20 })
  parcela: string | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfifcs)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TgfftcEntity, (tgfftcEntity) => tgfftcEntity.tgfifcs)
  @JoinColumn([{ name: 'NUFTC', referencedColumnName: 'nuftc' }])
  nuftc2: TgfftcEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfifcs)
  @JoinColumn([{ name: 'CODPARCLOJISTA', referencedColumnName: 'codparc' }])
  codparclojista: TgfparEntity;
}
