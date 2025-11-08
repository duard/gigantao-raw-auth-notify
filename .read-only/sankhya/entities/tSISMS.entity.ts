import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmdfmgEntity } from './tMDFMG.entity';

@Index('PK_TSISMS', ['codcontasms'], { unique: true })
@Entity('TSISMS', { schema: 'SANKHYA' })
export class TsismsEntity {
  @Column('int', { primary: true, name: 'CODCONTASMS' })
  codcontasms: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('varchar', { name: 'PLATAFORMA', length: 60 })
  plataforma: string;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 60 })
  usuario: string | null;

  @Column('varchar', { name: 'SENHA', nullable: true, length: 100 })
  senha: string | null;

  @Column('varchar', { name: 'NOMEREMETENTE', nullable: true, length: 100 })
  nomeremetente: string | null;

  @OneToMany(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.codcontasms2)
  tmdfmgs: TmdfmgEntity[];
}
