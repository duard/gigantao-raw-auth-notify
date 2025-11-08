import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPARPOC', ['codparc', 'codtipo', 'codsistema', 'codmarca'], {
  unique: true,
})
@Entity('TGFPARPOC', { schema: 'SANKHYA' })
export class TgfparpocEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODTIPO' })
  codtipo: number;

  @Column('int', { primary: true, name: 'CODSISTEMA' })
  codsistema: number;

  @Column('int', { primary: true, name: 'CODMARCA' })
  codmarca: number;

  @Column('int', { name: 'CODQUANTI' })
  codquanti: number;

  @Column('datetime', { name: 'DTPESQ' })
  dtpesq: Date;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfparpocs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
