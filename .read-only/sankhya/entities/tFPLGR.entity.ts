import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiendEntity } from './tSIEND.entity';

@Index('PK_TFPLGR', ['codlogradouro'], { unique: true })
@Entity('TFPLGR', { schema: 'SANKHYA' })
export class TfplgrEntity {
  @Column('varchar', { primary: true, name: 'CODLOGRADOURO', length: 4 })
  codlogradouro: string;

  @Column('varchar', { name: 'DESCRLOGRADOURO', length: 250 })
  descrlogradouro: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfplgrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TsiendEntity, (tsiendEntity) => tsiendEntity.codlogradouro)
  tsiends: TsiendEntity[];
}
