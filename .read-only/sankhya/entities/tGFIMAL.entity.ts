import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFIMAL', ['nuimg'], { unique: true })
@Entity('TGFIMAL', { schema: 'SANKHYA' })
export class TgfimalEntity {
  @Column('int', { primary: true, name: 'NUIMG' })
  nuimg: number;

  @Column('varchar', { name: 'NOMEARQ', length: 1000 })
  nomearq: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfimals)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfimals)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
