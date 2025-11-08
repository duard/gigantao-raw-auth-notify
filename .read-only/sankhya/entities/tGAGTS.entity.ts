import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgagtEntity } from './tGAGT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgasafEntity } from './tGASAF.entity';

@Index('PK_TGAGTS', ['grupotransg', 'codsaf', 'codparc'], { unique: true })
@Index('TGAGTS_ICODPARC', ['codparc', 'grupotransg', 'codsaf'], {})
@Entity('TGAGTS', { schema: 'SANKHYA' })
export class TgagtsEntity {
  @Column('int', { primary: true, name: 'GRUPOTRANSG' })
  grupotransg: number;

  @Column('int', { primary: true, name: 'CODSAF' })
  codsaf: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'SALDO', precision: 53 })
  saldo: number;

  @ManyToOne(() => TgagtEntity, (tgagtEntity) => tgagtEntity.tgagts)
  @JoinColumn([{ name: 'GRUPOTRANSG', referencedColumnName: 'grupotransg' }])
  grupotransg2: TgagtEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgagts)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgagts)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf2: TgasafEntity;
}
