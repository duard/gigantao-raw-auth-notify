import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcmbEntity } from './tGFCMB.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFCPO', ['codcombopai', 'codcombo', 'codprod'], { unique: true })
@Entity('TGFCPO', { schema: 'SANKHYA' })
export class TgfcpoEntity {
  @Column('int', { primary: true, name: 'CODCOMBOPAI', default: () => '(0)' })
  codcombopai: number;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODCOMBO', default: () => '(0)' })
  codcombo: number;

  @Column('float', { name: 'QTDPROD', precision: 53 })
  qtdprod: number;

  @Column('smallint', { name: 'POSICAO', default: () => '(0)' })
  posicao: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @ManyToOne(() => TgfcmbEntity, (tgfcmbEntity) => tgfcmbEntity.tgfcpos)
  @JoinColumn([{ name: 'CODCOMBO', referencedColumnName: 'codcombo' }])
  codcombo2: TgfcmbEntity;

  @ManyToOne(() => TgfcmbEntity, (tgfcmbEntity) => tgfcmbEntity.tgfcpos2)
  @JoinColumn([{ name: 'CODCOMBOPAI', referencedColumnName: 'codcombo' }])
  codcombopai2: TgfcmbEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcpos)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
