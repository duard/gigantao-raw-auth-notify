import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgagtEntity } from './tGAGT.entity';

@Index('PK_TGAGTP', ['grupotransg', 'codprod', 'controle'], { unique: true })
@Index('TGAGTP_ICODPROD', ['codprod', 'controle'], {})
@Entity('TGAGTP', { schema: 'SANKHYA' })
export class TgagtpEntity {
  @Column('int', { primary: true, name: 'GRUPOTRANSG' })
  grupotransg: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgagtps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgagtEntity, (tgagtEntity) => tgagtEntity.tgagtps)
  @JoinColumn([{ name: 'GRUPOTRANSG', referencedColumnName: 'grupotransg' }])
  grupotransg2: TgagtEntity;
}
