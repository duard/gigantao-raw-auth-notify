import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPOC', ['nupotcpa'], { unique: true })
@Entity('TGFPOC', { schema: 'SANKHYA' })
export class TgfpocEntity {
  @Column('int', { primary: true, name: 'NUPOTCPA' })
  nupotcpa: number;

  @Column('varchar', { name: 'TIPOPOTCPA', length: 1 })
  tipopotcpa: string;

  @Column('varchar', { name: 'DESCRPOTCPA', length: 20 })
  descrpotcpa: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpocs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
