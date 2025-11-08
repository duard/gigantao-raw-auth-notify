import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmimetEntity } from './tMIMET.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigdgEntity } from './tSIGDG.entity';
import { TsigbcEntity } from './tSIGBC.entity';
import { TssitpEntity } from './tSSITP.entity';

@Index('PK_TSIDSB', ['nudsb'], { unique: true })
@Entity('TSIDSB', { schema: 'SANKHYA' })
export class TsidsbEntity {
  @Column('int', { primary: true, name: 'NUDSB' })
  nudsb: number;

  @Column('varchar', { name: 'TITULO', length: 50 })
  titulo: string;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('text', { name: 'LAYOUT', nullable: true })
  layout: string | null;

  @Column('varchar', { name: 'GRUPO', nullable: true, length: 50 })
  grupo: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TmimetEntity, (tmimetEntity) => tmimetEntity.nudsb)
  tmimets: TmimetEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsidsbs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsidsbs2)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToMany(() => TsigdgEntity, (tsigdgEntity) => tsigdgEntity.tsidsbs)
  @JoinTable({
    name: 'TSIDSG',
    joinColumns: [{ name: 'NUDSB', referencedColumnName: 'nudsb' }],
    inverseJoinColumns: [{ name: 'NUGDG', referencedColumnName: 'nugdg' }],
    schema: 'SANKHYA',
  })
  tsigdgs: TsigdgEntity[];

  @OneToMany(() => TsigbcEntity, (tsigbcEntity) => tsigbcEntity.nudsb)
  tsigbcs: TsigbcEntity[];

  @OneToMany(() => TssitpEntity, (tssitpEntity) => tssitpEntity.nudsb)
  tssitps: TssitpEntity[];
}
