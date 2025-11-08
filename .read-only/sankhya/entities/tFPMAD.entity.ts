import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPMAD', ['codmad'], { unique: true })
@Entity('TFPMAD', { schema: 'SANKHYA' })
export class TfpmadEntity {
  @Column('smallint', { primary: true, name: 'CODMAD' })
  codmad: number;

  @Column('varchar', { name: 'DESCRMAD', length: 100 })
  descrmad: string;

  @Column('smallint', { name: 'UTILIZAEM' })
  utilizaem: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmads)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
