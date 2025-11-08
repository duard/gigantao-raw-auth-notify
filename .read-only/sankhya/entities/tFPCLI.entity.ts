import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('AK_CODCLI_TFPCLI', ['codcli'], { unique: true })
@Index('PK_TFPCLI', ['codcnes'], { unique: true })
@Entity('TFPCLI', { schema: 'SANKHYA' })
export class TfpcliEntity {
  @Column('smallint', { name: 'CODCLI' })
  codcli: number;

  @Column('varchar', { name: 'NOMECLI', nullable: true, length: 100 })
  nomecli: string | null;

  @Column('varchar', { primary: true, name: 'CODCNES', length: 20 })
  codcnes: string;

  @Column('varchar', { name: 'FORMACONTATO', length: 100 })
  formacontato: string;

  @Column('varchar', { name: 'EMAIL', length: 100 })
  email: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpclis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
