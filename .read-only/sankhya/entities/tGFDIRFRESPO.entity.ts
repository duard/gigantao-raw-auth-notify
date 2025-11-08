import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFDIRFRESPO', ['codemp', 'dtinicial', 'dtfinal', 'reg'], {
  unique: true,
})
@Entity('TGFDIRFRESPO', { schema: 'SANKHYA' })
export class TgfdirfrespoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 5,
    default: () => "'RESPO'",
  })
  reg: string;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 60 })
  nome: string | null;

  @Column('varchar', { name: 'DDD', nullable: true, length: 2 })
  ddd: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 9 })
  telefone: string | null;

  @Column('varchar', { name: 'RAMAL', nullable: true, length: 6 })
  ramal: string | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 9 })
  fax: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 50 })
  email: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdirfrespos)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
