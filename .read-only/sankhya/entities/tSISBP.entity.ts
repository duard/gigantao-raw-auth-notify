import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSISBP', ['codusu', 'originalprintername', 'tipodoc'], {
  unique: true,
})
@Entity('TSISBP', { schema: 'SANKHYA' })
export class TsisbpEntity {
  @Column('varchar', {
    primary: true,
    name: 'ORIGINALPRINTERNAME',
    length: 100,
  })
  originalprintername: string;

  @Column('varchar', { name: 'PRINTERURI', length: 210 })
  printeruri: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { primary: true, name: 'TIPODOC', length: 50 })
  tipodoc: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsisbps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
