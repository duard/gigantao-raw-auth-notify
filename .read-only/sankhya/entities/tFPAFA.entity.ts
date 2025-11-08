import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfphisEntity } from './tFPHIS.entity';

@Index('PK_TFPAFA', ['tiptab', 'codafast'], { unique: true })
@Entity('TFPAFA', { schema: 'SANKHYA' })
export class TfpafaEntity {
  @Column('char', {
    primary: true,
    name: 'TIPTAB',
    length: 1,
    default: () => "'R'",
  })
  tiptab: string;

  @Column('char', { primary: true, name: 'CODAFAST', length: 3 })
  codafast: string;

  @Column('char', { name: 'DESCRAFAST', length: 90 })
  descrafast: string;

  @Column('char', { name: 'DIRMULTAFGTS', length: 1, default: () => "'S'" })
  dirmultafgts: string;

  @Column('char', { name: 'DIRDECTERC', length: 1, default: () => "'S'" })
  dirdecterc: string;

  @Column('char', { name: 'DIRAVISOPREVIO', length: 1, default: () => "'S'" })
  diravisoprevio: string;

  @Column('char', { name: 'DIRFERMENANO', length: 1, default: () => "'S'" })
  dirfermenano: string;

  @Column('char', { name: 'CODGOVERNO', nullable: true, length: 4 })
  codgoverno: string | null;

  @Column('char', { name: 'ABATEMESMEDIA', length: 1, default: () => "'N'" })
  abatemesmedia: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'CODAFAHOMOLOGNET', nullable: true, length: 4 })
  codafahomolognet: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpafas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfpafa)
  tfphis: TfphisEntity[];
}
